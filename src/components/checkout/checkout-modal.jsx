import { useState } from "react";
import TicketQuantityStep from "./ticket-quantity-step";
import PaymentSummaryStep from "./payment-summary-step";
import BillingInformationStep from "./billing-information-step";
import { useSelector } from "react-redux";
import { registerEvent } from "../../api/registerEvent";

export default function CheckoutModal({ isOpen, onClose, eventData }) {
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user_id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    setSelectedTicket(selectedTicket); // Set selected ticket when continuing to payment
    setStep(3);
  };

  const handlePackageSelect = (packageType) => {
    setSelectedPackage(packageType);
  };

  // const handlePlaceOrder = () => {
  //   // Here you would handle the order submission
  //   console.log("Order placed", { ticketQuantity, billingInfo });
  //   onClose();
  //   // Reset state
  //   setStep(1);
  //   setTicketQuantity(1);
  // };

  const handlePlaceOrder = async () => {
    setLoading(true);
    setError(null);
  
    const amount = getPackagePrice() * ticketQuantity;
    const fee = amount * 0.05; // 5% fee
    const total = amount + fee;
  
    const orderData = {
      id: eventData.id,
      event_name: eventData.event_title,
      ticket_type: selectedTicket,
      ticket_quantity: ticketQuantity,
      amount: amount,   // ✅ Send amount
      fee: fee,         // ✅ Send fee
      total: total,     // ✅ Send total
      first_name: billingInfo.firstName,
      last_name: billingInfo.lastName,
      email: billingInfo.email,
      phone: billingInfo.phone,
    };
  
    console.log("🚀 About to send order:", JSON.stringify(orderData, null, 2));
  
    try {
      const response = await registerEvent(orderData, token);
      console.log("✅ Order Success:", response);
      onClose();
      setStep(1);
      setTicketQuantity(1);
    } catch (err) {
      console.error("❌ Order Failed:", err);
      setError(err.response?.data?.message || "Failed to place order.");
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
