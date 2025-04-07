import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Spinner } from "../Spinner";

export default function BillingInformationStep({
  billingInfo,
  setBillingInfo,
  subtotal,
  fees,
  total,
  eventData,
  onPlaceOrder,
  ticketQuantity,
  selectedPackage,
  loading,
  validationErrors = {},
}) {
  const { user_id: userId } = useSelector((state) => state.auth);

  const handleGoogleLogin = () => {
    window.location.href = "https://api.centrl.ng/google_callback.php";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  // const handlePaymentMethodChange = (method) => {
  //   setBillingInfo((prev) => ({ ...prev, paymentMethod: method }));
  // };

  return (
    <div className="rounded-lg bg-white p-6 md:grid md:grid-cols-[1.5fr_1fr] md:gap-6">
      <div>
        <div className="mb-6">
          <h2 className="text-300 font-600">Billing Information</h2>
          {!userId && (
            <p className="text-50 text-foreground">
              <button onClick={handleGoogleLogin} className="text-primary">
                Log in
              </button>{" "}
              for a faster experience
            </p>
          )}
        </div>

        <div className="mb-4">
          <div>
            <label
              htmlFor="fullName"
              className="mb-1 inline-block text-50 font-500"
            >
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={billingInfo.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="w-full rounded-md border border-muted bg-white p-2 text-50"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="mb-1 inline-block text-50 font-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={billingInfo.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="w-full rounded-md border border-muted bg-white p-2 text-50"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="mb-1 inline-block text-50 font-500">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={billingInfo.phone}
            onChange={handleInputChange}
            placeholder="Phone Number *"
            className={`w-full rounded-md border ${validationErrors.phone ? "border-red-500" : "border-muted"} bg-white p-2 text-50`}
            required
          />
          {validationErrors.phone && (
            <p className="mt-1 text-xs text-red-500">
              {validationErrors.phone}
            </p>
          )}
        </div>

        {/* to be implemented later */}
        {/* <div className="mb-6">
          <h3 className="text-lg mb-4 font-700">Pay with</h3>

          <div className="space-y-3">
            <div
              className={`relative cursor-pointer rounded-lg border border-muted px-4 py-2 transition-all ${
                billingInfo.paymentMethod === "credit"
                  ? "border-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePaymentMethodChange("credit")}
            >
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                checked={billingInfo.paymentMethod === "credit"}
                onChange={() => handlePaymentMethodChange("credit")}
                className="hidden"
              />
              <label
                htmlFor="creditCard"
                className="block w-full cursor-pointer text-50 font-600"
              >
                Credit or debit card
              </label>
            </div>

            <div
              className={`relative cursor-pointer rounded-lg border border-muted px-4 py-2 transition-all ${
                billingInfo.paymentMethod === "google"
                  ? "border-primary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => handlePaymentMethodChange("google")}
            >
              <input
                type="radio"
                id="googlePay"
                name="paymentMethod"
                checked={billingInfo.paymentMethod === "google"}
                onChange={() => handlePaymentMethodChange("google")}
                className="hidden"
              />
              <label
                htmlFor="googlePay"
                className="block w-full cursor-pointer text-50 font-600"
              >
                Google Pay
              </label>
            </div>
          </div>
        </div> */}
      </div>

      <div className="absolute right-[15.5rem] top-0 hidden h-full w-[1px] bg-muted md:block"></div>

      <div className="pl-2">
        <div className="mb-4 hidden overflow-hidden rounded-lg border border-primary md:block">
          <img
            src={eventData.banner_image}
            alt={eventData.event_title}
            className="h-48 w-52 object-cover"
          />
        </div>

        <div>
          <h3 className="mb-4 text-100 font-700">Summary</h3>

          <div className="mb-2 flex justify-between">
            <span className="text-100">{selectedPackage} Tickets</span>
            <div className="flex gap-1">
              <span className="text-100">{formatCurrency(subtotal)}</span>{" "}
              <p className="text-muted">× {ticketQuantity}</p>
            </div>
          </div>

          <div className="mb-2 flex justify-between">
            <span className="text-100 font-700">Fees</span>
            <div className="flex gap-1">
              <span className="text-100">{formatCurrency(fees)}</span>{" "}
              <p className="text-muted">× {ticketQuantity}</p>
            </div>
          </div>

          <div className="mt-4 flex justify-between border-t border-muted pt-4">
            <span className="text-100 font-700">Total</span>
            <div className="flex gap-1">
              <span className="text-100">{formatCurrency(total)}</span>{" "}
              <p className="text-muted">× {ticketQuantity}</p>
            </div>
          </div>
        </div>

        <button
          onClick={onPlaceOrder}
          disabled={loading}
          className="mt-8 w-full rounded-lg bg-subColorBtn py-2 text-50 font-500 text-white hover:bg-subColorBtn/90"
        >
          {loading ? <Spinner /> : "Place Order"}
        </button>
      </div>
    </div>
  );
}
