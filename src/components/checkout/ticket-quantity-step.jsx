export default function TicketQuantityStep({ onSelect }) {
  const ticketOptions = [1, 2, 3, 4, 5, 6];

  return (
    <div className="flex max-w-2xl flex-col items-center rounded-lg bg-white p-6">
      <h2 className="mb-6 text-center text-300 font-700">How many tickets?</h2>

      <div className="grid grid-cols-3 gap-4">
        {ticketOptions.map((quantity) => (
          <button
            key={quantity}
            onClick={() => onSelect(quantity)}
            className="flex h-12 w-[100px] items-center justify-center rounded-md border border-muted bg-white text-200 font-500 hover:border-primary hover:bg-primary/5"
          >
            {quantity}
          </button>
        ))}
      </div>

      <p className="mt-8 text-center text-50 text-black">
        Life comes together with <strong>Centrl</strong>
      </p>
    </div>
  );
}
