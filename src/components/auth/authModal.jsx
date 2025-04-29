import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { X } from "lucide-react";
import { updateUserProfile } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice";
import copy_alt from "../../assets/copy_alt.png";

const AuthOtpModal = ({
  isOpen,
  onClose,
  email,
  token,
  onSave,
  onVerifyOtp,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otp, setOtp] = useState("");
  // const { user_id, email, googleId, profileImage } = useSelector(
  //     (state) => state.auth,
  // );
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handlePasteCode = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      // Filter out any non-numeric characters and take only first 6 digits
      const numericText = clipboardText.replace(/\D/g, "").substring(0, 6);

      if (numericText.length > 0) {
        setOtp(numericText);

        // If we got a complete 6-digit code, verify it automatically
        if (numericText.length === 6 && onVerifyOtp) {
          onVerifyOtp(numericText);
        }
      }
    } catch (error) {
      console.error("Failed to paste from clipboard:", error);
      toast.error("Unable to access clipboard. Please check permissions.");
    }
  };

  return (
    <div className="fixed inset-0 z-[600] mt-20 flex items-start justify-center">
      <div
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
        onClick={onClose}
      />
      <div className="z-[800] mx-4 max-h-[100vh] w-full max-w-[400px] overflow-y-auto rounded-lg bg-white">
        <div className="flex items-center justify-between p-6">
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700"
            disabled={isSubmitting}
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-1 px-6">
          <span className="text-400 font-600">Enter Code</span>
          <span className="text-100 font-500 text-foreground">
            Please enter the 6 digit code we sent to
          </span>
          <span className="text-100 font-500">{email}</span>
        </div>
        <OtpInput
          value={otp}
          onChange={(value) => {
            setOtp(value);
            if (value.length === 6) {
              onVerifyOtp(value);
            }
          }}
          numInputs={6}
          shouldAutoFocus
          inputType="tel"
          containerStyle="flex justify-center gap-3 mt-6"
          inputStyle={{
            backgroundColor: "#D9D9D9",
            width: "47px",
            height: "48px",
            border: "1px solid #D1D5DB",
            borderRadius: "0.375rem",
            fontSize: "1.125rem",
            textAlign: "center",
            outline: "none",
          }}
          renderInput={(props) => <input {...props} />}
        />

        <div className="flex items-center justify-between rounded-xl bg-white px-6 py-4 shadow-sm">
          {/* Paste Code Button */}
          <div
            onClick={handlePasteCode}
            className="flex cursor-pointer items-center space-x-2 rounded-md bg-[#F1F0F0] px-3 py-1.5"
          >
            <img src={copy_alt} alt="Paste" className="h-4 w-4" />
            <span className="text-sm font-semibold text-black">Paste Code</span>
          </div>

          {/* Resend Code */}
          <span className="text-sm font-semibold text-black">Resend Code</span>
        </div>
      </div>
    </div>
  );
};

export default AuthOtpModal;
