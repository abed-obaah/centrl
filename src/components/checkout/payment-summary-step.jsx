import { formatCurrency } from "../../utils/helpers";
import Image from "../Image";
import AvatarFallback from "../AvatarFallback";

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

  const getInitialsAvatar = (name, email, size = 48) => {
    // Handle undefined/null cases
    if (!name && !email) {
      name = "U";
    }

    // Use name if available, otherwise use first part of email
    let text = "";
    if (name) {
      const nameParts = name.trim().split(" ");
      text = nameParts
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    } else if (email) {
      text = email.split("@")[0][0].toUpperCase();
    } else {
      text = "U";
    }

    text = text.substring(0, 2);

    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#F3FF33",
      "#FF33F3",
      "#33FFF3",
      "#FF8C33",
      "#8C33FF",
      "#33FF8C",
      "#FF338C",
    ];
    const color = colors[text.charCodeAt(0) % colors.length];

    return (
      <div
        className={`flex items-center justify-center rounded-full font-bold text-white`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          fontSize: `${size / 2}px`,
        }}
      >
        {text}
      </div>
    );
  };

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
                {!eventData.image === "null" ? (
                  <Image
                    src={eventData.image}
                    alt={eventData.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : (
                  getInitialsAvatar(eventData.name, eventData.email, 32)
                )}
                <p className="text-50 capitalize text-black">
                  {eventData.name}
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
              Access to main event sessions and general seating.
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
              All-access pass with premium seating, networking lounge, and VIP
              perks.
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
