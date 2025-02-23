import { useState } from "react";
import Arrow from "../assets/arrowRight.png";
import Sub from "../components/SettingsPayments";
import Subs from "../components/AddPayments";
import Payments from "../components/PaymentMethod";
import SocialsSection from "../components/SocialsSection";

export default function Example() {
  const [activeSection, setActiveSection] = useState("account");

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Sidebar Navigation */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
        <div className="px-4 sm:px-0 space-y-5">
          <h2
            className={`text-base/7 font-semibold text-gray-900 cursor-pointer ${
              activeSection === "account" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveSection("account")}
          >
            Account
          </h2>
          <h2
            className={`text-base/7 font-semibold text-gray-900 cursor-pointer ${
              activeSection === "payment" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveSection("payment")}
          >
            Payment
          </h2>
          <h2
            className={`text-base/7 font-semibold text-gray-900 cursor-pointer ${
              activeSection === "more" ? "text-blue-500" : ""
            }`}
            onClick={() => setActiveSection("more")}
          >
            More
          </h2>
        </div>

        {/* Dynamic Content Section */}
        <div className="md:col-span-2">
          {activeSection === "account" && (
                     <form className="">
                                <div className="px-2 py-6 sm:p-8 bg-[#fff] mb-10 shadow-sm sm:rounded-xl">
                                    <h1 className="font-[700] text-[16px]">General preferences</h1>
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                                        <div className="sm:col-span-3">
                                            {["Username", "Language", "Sync calendar", "Sound effects"].map(
                                                (item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex justify-between items-center border-b border-b-[#00000014] py-5"
                                                    >
                                                        <p className="block text-sm/6 font-medium text-gray-900">
                                                            {item}
                                                        </p>
                                                        <img src={Arrow} className="w-3 h-3" />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <Sub />
                                <SocialsSection />
                      </form>
          )}

          {activeSection === "payment"
           && 
           <>
            <Subs />
            <Payments />
          </>
          }
          {activeSection === "more" && <SocialsSection />}
        </div>
      </div>
    </div>
  );
}
