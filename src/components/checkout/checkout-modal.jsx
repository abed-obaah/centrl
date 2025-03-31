import { useState } from "react";
import TicketQuantityStep from "./ticket-quantity-step";
import PaymentSummaryStep from "./payment-summary-step";
import BillingInformationStep from "./billing-information-step";
import { X } from "lucide-react";

export default function CheckoutModal({ isOpen, onClose, eventData }) {
  const [step, setStep] = useState(1);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    paymentMethod: "credit",
  });

  if (!isOpen) return null;

  const handleTicketSelect = (quantity) => {
    setTicketQuantity(quantity);
    setStep(2);
  };

  const handlePaymentContinue = () => {
    setStep(3);
  };

  const handlePlaceOrder = () => {
    // Here you would handle the order submission
    console.log("Order placed", { ticketQuantity, billingInfo });
    onClose();
    // Reset state
    setStep(1);
    setTicketQuantity(1);
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
          />
        )}
      </div>
    </div>
  );
}
