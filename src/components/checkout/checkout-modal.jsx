import { useState } from "react";
import TicketQuantityStep from "./ticket-quantity-step";
import PaymentSummaryStep from "./payment-summary-step";
import BillingInformationStep from "./billing-information-step";
import { useSelector } from "react-redux";
import axios from "axios";
import { updateUserProfile } from "../../api/userApi";
import { toast } from "sonner";

export default function CheckoutModal({ isOpen, onClose, eventData }) {
  const {
    name,
    user_id: userId,
    token,
    email,
  } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("all");
  const [billingInfo, setBillingInfo] = useState({
    fullName: name,
    email: email,
    phone: "",
    paymentMethod: "credit",
  });

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  if (!isOpen) return null;

  const handleTicketSelect = (quantity) => {
    setTicketQuantity(quantity);
    setStep(2);
  };

  const handlePaymentContinue = (selectedTicket) => {
    setSelectedTicket(selectedTicket);
    setStep(3);
  };

  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };

  const validatePhoneNumber = (phone) => {
    return phone && phone.trim().length >= 11;
  };

  const handlePlaceOrder = async () => {
    // Reset validation errors
    setValidationErrors({});

    // Validate phone number
    if (!validatePhoneNumber(billingInfo.phone)) {
      setValidationErrors({
        phone: "Please enter a valid phone number",
      });
      toast.error("Please enter a valid phone number");
      return;
    }

    setLoading(true);
    setError(null);

    const amount = getPackagePrice() * ticketQuantity;
    const fee = amount * 0.05; // 5% fee
    const total = amount + fee;

    const orderData = {
      event_id: eventData.id,
      event_name: eventData.event_title,
      ticket_type: selectedTicket,
      ticket_quantity: ticketQuantity,
      amount: total * 100, // Convert to kobo
      first_name: billingInfo.fullName,
      email: billingInfo.email,
      phone: billingInfo.phone,
    };

    try {
      if (userId && token && billingInfo.phone) {
        try {
          await updateUserProfile(token, {
            phone: billingInfo.phone,
          });
          toast.success("Phone number updated successfully");
        } catch (profileError) {
          console.error("Failed to update phone number:", profileError);
          toast.error(
            "Failed to update your profile, but continuing with order",
          );
        }
      }

      const response = await axios.post(
        "https://api.centrl.ng/initiate_payment.php",
        orderData,
      );

      const paystackUrl = response.data.authorization_url;
      window.open(paystackUrl, "_blank"); // Open the Paystack URL in a new tab
    } catch (err) {
      console.error("❌ Payment Initialization Failed:", err);
      setError("Failed to initialize payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const getPackagePrice = () => {
    if (selectedPackage === "Basic") {
      return eventData.ticket_price_basic || 0;
    } else if (selectedPackage === "Diamond") {
      return eventData.ticket_price_diamond || 0;
    }
    return eventData.ticket_price || 0;
  };

  const calculateSubtotal = () => {
    return getPackagePrice() * ticketQuantity;
  };

  const calculateFees = () => {
    // Example fee calculation - 5% of subtotal
    return calculateSubtotal() * 0.05;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateFees();
  };

  return (
    <div className="fixed inset-0 z-[600] mt-[5rem] flex items-start justify-center overflow-auto px-6 md:px-0">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="relative z-[800] w-full shadow-lg">
        {step === 1 && (
          <TicketQuantityStep
            onSelect={handleTicketSelect}
            eventData={eventData}
          />
        )}

        {step === 2 && (
          <PaymentSummaryStep
            ticketQuantity={ticketQuantity}
            subtotal={calculateSubtotal()}
            fees={calculateFees()}
            total={calculateTotal()}
            eventData={eventData}
            selectedPackage={selectedPackage}
            onPackageSelect={handlePackageSelect}
            onBack={handleBack}
            onContinue={handlePaymentContinue}
            selectedTicket={selectedTicket}
            setSelectedTicket={setSelectedTicket}
          />
        )}

        {step === 3 && (
          <BillingInformationStep
            billingInfo={billingInfo}
            setBillingInfo={setBillingInfo}
            ticketQuantity={ticketQuantity}
            subtotal={calculateSubtotal()}
            fees={calculateFees()}
            total={calculateTotal()}
            eventData={eventData}
            selectedPackage={selectedPackage}
            onBack={handleBack}
            onPlaceOrder={handlePlaceOrder}
            loading={loading}
            validationErrors={validationErrors}
          />
        )}
      </div>
    </div>
  );
}
