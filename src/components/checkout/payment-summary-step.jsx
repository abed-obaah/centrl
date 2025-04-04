import { formatCurrency } from "../../utils/helpers";
import Image from "../Image";

export default function PaymentSummaryStep({
  ticketQuantity,
  subtotal,
  fees,
  total,
  eventData,
  selectedPackage,
  onPackageSelect,
  onBack,
  onContinue,
  selectedTicket,
  setSelectedTicket,
}) {
  const hasBasicPackage = eventData.ticket_price_basic > 0;
  const hasDiamondPackage = eventData.ticket_price_diamond > 0;

  return (
    <div className="relative grid max-w-3xl grid-cols-1 gap-4 rounded-lg bg-white p-6 md:grid-cols-[1.5fr_1fr] md:gap-6">
      <div>
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:gap-0">
          <div>
            <h2 className="mb-2 text-300 font-600 capitalize">
              {eventData.event_title}
            </h2>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src={eventData.banner_image}
                  alt={eventData.event_title}
                  className="size-[30px] rounded-full object-cover"
                />
                <p className="text-50 capitalize text-black">
                  {eventData.event_title}
                </p>
              </div>
            </div>
          </div>

          <span className="rounded-xl bg-black px-4 py-2 text-50 text-white">
            {ticketQuantity} {ticketQuantity === 1 ? "ticket" : "tickets"}
          </span>
        </div>

        <div className="absolute right-[19.5rem] top-0 hidden h-full w-[1px] bg-muted md:block"></div>

        {hasBasicPackage && (
          <div
            className={`mb-4 rounded-lg border ${
              selectedPackage === "Basic" ? "border-primary" : "border-muted"
            } cursor-pointer bg-white p-4`}
            onClick={() => {
              onPackageSelect("Basic");
              setSelectedTicket("Basic");
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-100 font-500">Basic</h3>
              <p className="text-100 font-600">
                ₦ {eventData.ticket_price_basic}
              </p>
            </div>
            <p className="mb-4 text-50 text-foreground">
              Industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        )}

        {hasDiamondPackage && (
          <div
            className={`mb-4 rounded-lg border ${
              selectedPackage === "Diamond" ? "border-primary" : "border-muted"
            } cursor-pointer bg-white p-4`}
            onClick={() => {
              onPackageSelect("Diamond");
              setSelectedTicket("Diamond");
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="mb-2 text-200 font-500">Diamond</h3>
              <p className="text-100 font-600">
                ₦ {eventData.ticket_price_diamond}
              </p>
            </div>
            <p className="mb-4 text-50 text-foreground">
              Industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
          </div>
        )}
      </div>

      <div className="md:pl-2">
        <div className="mb-4 hidden overflow-hidden rounded-lg md:block">
          <Image
            src={eventData.banner_image}
            alt={eventData.event_title}
            className="h-[200px] w-full object-cover"
          />
        </div>

        <div>
          <h3 className="mb-4 text-100 font-700">Summary</h3>

          <div className="mb-2 flex justify-between">
            <span className="text-100">Tickets</span>
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

        <div className="mt-4 flex justify-between space-x-4">
          <button
            onClick={onBack}
            className="rounded-lg border border-muted bg-white px-4 py-2 text-50 font-500 hover:bg-muted/10"
          >
            Back
          </button>

          <button
            // onClick={onContinue}
            onClick={() => onContinue(selectedTicket)}
            disabled={!selectedTicket} // Prevent checkout if no ticket is selected
            className={`flex-1 rounded-lg px-4 py-2 text-50 font-500 text-white transition ${
              selectedTicket
                ? "bg-subColorBtn hover:bg-subColorBtn/90"
                : "cursor-not-allowed bg-gray-300"
            }`}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
