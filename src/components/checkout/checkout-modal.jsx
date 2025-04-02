import { useState } from "react";
import TicketQuantityStep from "./ticket-quantity-step";
import PaymentSummaryStep from "./payment-summary-step";
import BillingInformationStep from "./billing-information-step";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CheckoutModal({ isOpen, onClose, eventData }) {
  const { name, email } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const [billingInfo, setBillingInfo] = useState({
    fullName: name,
    email: email,
    phone: "",
    paymentMethod: "credit",
  });

  const [selectedTicket, setSelectedTicket] = useState(null);

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

  const handlePlaceOrder = async () => {
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
    <div className="fixed inset-0 z-[600] flex items-center justify-center">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="relative z-[800] shadow-lg">
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
          />
        )}
      </div>
    </div>
  );
}
