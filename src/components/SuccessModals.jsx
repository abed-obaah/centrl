import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const SuccessModal = ({
  isOpen,
  onClose,
  email,
  message = "You have successfully subscribed to our newsletter!",
}) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Stop confetti after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center">
      {/* Confetti animation */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="z-[800] mx-4 w-full max-w-[400px] rounded-lg bg-white p-6 text-center">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-black hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Success icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100"></div>

          {/* Success message */}
          <h3 className="text-400 font-600">Success!</h3>
          <p className="text-100 font-500 text-foreground">{message}</p>
          {email && (
            <p className="text-100 font-500 text-foreground">
              Confirmation sent to {email}
            </p>
          )}
        </div>

        {/* Continue button */}
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
