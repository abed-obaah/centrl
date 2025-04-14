import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { X } from "lucide-react";
import { updateUserProfile } from "../../api/userApi";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice";
import copy_alt from "../../assets/copy_alt.png"

const AuthOtpModal = ({
    isOpen,
    onClose,
    email,
    token,
    onSave,
    onVerifyOtp
}) => {



    const [isSubmitting, setIsSubmitting] = useState(false);
    const [otp, setOtp] = useState('');
    // const { user_id, email, googleId, profileImage } = useSelector(
    //     (state) => state.auth,
    // );
    const dispatch = useDispatch();



    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);



        try {
            // Show loading toast
            const toastId = toast.loading("Updating profile...");

            // Call the API to update the profile
            const response = await updateUserProfile(token, profileData);

            toast.dismiss(toastId);

            // Update Redux store with new name
            dispatch(
                setUser({
                    token,
                    user_id,
                    name: fullName,
                    email,
                    googleId,
                    profileImage,
                }),
            );

            // Call the onSave callback with the updated data
            if (onSave) {
                onSave(response.data);
            }

            // Show success toast
            toast.success("Profile updated successfully", { id: toastId });

            // Close the modal
            onClose();
        } catch (error) {
            console.error("Failed to update profile:", error);
            toast.error("Failed to update profile. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[600] flex items-center justify-center">
            <div
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg"
                onClick={onClose}
            />
            <div className="z-[800] mx-4 max-h-[100vh]  w-full max-w-[400px] overflow-y-auto rounded-lg bg-white">
                <div className="flex items-center justify-between p-6">
                    <button
                        onClick={onClose}
                        className="hover:text-gray-700 text-black"
                        disabled={isSubmitting}
                    >
                        <X size={20} />
                    </button>

                </div>
                <div className="px-6 flex flex-col gap-1">
                    <span className="text-400 font-600">Enter Code</span>
                    <span className="text-100 font-500 text-foreground">Please enter the 6 digit code we sent to</span>
                    <span className="text-100 font-500 ">{email}</span>
                </div>
                <OtpInput
  value={otp}
  onChange={(value) => {
    setOtp(value);
    if (value.length === 6) {
      onVerifyOtp(value); // ✅ Automatically trigger when all digits are entered
    }
  }}
  numInputs={6}
  shouldAutoFocus
  inputType="tel"
  containerStyle="flex justify-center gap-3 mt-6"
  inputStyle={{
    backgroundColor: '#D9D9D9',
    width: '47px',
    height: '48px',
    border: '1px solid #D1D5DB',
    borderRadius: '0.375rem',
    fontSize: '1.125rem',
    textAlign: 'center',
    outline: 'none',
  }}
  renderInput={(props) => <input {...props} />}
/>

                    <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-sm">
                    {/* Paste Code Button */}
                    <div className="flex items-center space-x-2 bg-[#F1F0F0] px-3 py-1.5 rounded-md">
                        <img src={copy_alt} alt="Paste" className="w-4 h-4" />
                        <span className="text-sm font-semibold text-black">Paste Code</span>
                    </div>

                    {/* Resend Code */}
                    <span className="text-sm font-semibold text-black">Resend Code</span>
                    </div>

                {/* <form onSubmit={handleSubmit} className="p-6">
                    <div className="mb-4">
                        <label className="mb-2 block font-500 text-foreground">
                            First Name
                        </label>

                    </div>
                </form> */}
            </div>
        </div>
    );
};

export default AuthOtpModal;
