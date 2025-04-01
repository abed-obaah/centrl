import { useState } from "react";
import TicketQuantityStep from "./ticket-quantity-step";
import PaymentSummaryStep from "./payment-summary-step";
import BillingInformationStep from "./billing-information-step";
import { registerEvent } from "../../api/registerEvent";
import { useSelector } from "react-redux";
import { X } from "lucide-react";

export default function CheckoutModal({ isOpen, onClose, eventData }) {
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user_id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [step, setStep] = useState(1);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
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

  // const handlePaymentContinue = () => {
  //   setStep(3);
  // };

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

    const orderData = {
      id: eventData.id,
      event_name: eventData.event_title,
      ticket_type: selectedTicket, // Include the selected ticket type here
      ticketQuantity,
      total: calculateTotal(),
      first_name: billingInfo.firstName,
      last_name: billingInfo.lastName,
      email: billingInfo.email,
      phone: billingInfo.phone,
    };

    console.log("🚀 About to send order:", JSON.stringify(orderData, null, 2));
    console.log("🔑 Token:", token);

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

  const calculateSubtotal = () => {
    return eventData.ticket_price * ticketQuantity;
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
          onBack={handleBack}
          onPlaceOrder={handlePlaceOrder}
          loading={loading}
          error={error}
        />
        )}
      </div>
    </div>
  );
}
