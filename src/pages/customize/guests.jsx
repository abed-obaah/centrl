import TechnologyImg from "../../assets/receipt-tickets.png";
import BusinessImg from "../../assets/people.png";
import ConcertImg from "../../assets/qr-image.png";

import { Download } from "lucide-react";
import Guest from "../../components/gueste";
import { useState } from "react";
import { useParams } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "Registration",
    description: "Open",
    imgUrl: TechnologyImg,
  },
  {
    id: 2,
    name: "Event Capacity",
    description: "Unlimited",
    imgUrl: BusinessImg,
  },
  {
    id: 3,
    name: "Check In Guests ",
    description: "",
    imgUrl: ConcertImg,
  },
];

const Guests = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const guestList = [
    { id: 1, name: "Cooper Franci", email: "samualeadeol@gmail.com" },
    { id: 2, name: "Abram Lubin", email: "samualeadeol@gmail.com" },
    { id: 3, name: "Makenna Korsgaard", email: "samualeadeol@gmail.com" },
  ];

  const filteredGuests = guestList.filter((guest) =>
    guest.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="md:ml-[4.6rem] md:max-w-[1000px]">
      <div className="mb-6 mr-auto flex max-w-[744px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-300 font-600">Guests</h1>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-muted bg-card px-4 py-2 text-100 font-500 hover:bg-background">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      <div className="mr-auto max-w-[744px] space-y-8 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex justify-center"
          >
            <div className="flex h-full min-h-[180px] w-[280px] flex-col justify-between rounded-3xl bg-[#fff] p-6">
              <img
                className="mb-8 size-10 object-contain"
                src={card.imgUrl}
                alt={card.name}
              />

              <div>
                <h3 className="text-200 font-600">{card.name}</h3>
                <p className="text-[#B0B0B0]">{card.description || "\u00A0"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex w-[300px] items-center rounded-2xl border bg-background px-4 py-1.5">
        <input
          type="text"
          placeholder="Search guests"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border-0 bg-background p-2 outline-none focus:border-none focus:ring-0"
        />

        <label className="ml-2 inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={toggle}
            onChange={() => setToggle(!toggle)}
            className="sr-only"
          />
          <div
            className={`flex h-5 w-5 items-center rounded-full bg-muted p-1 ${
              toggle ? "bg-muted" : ""
            }`}
          >
            <div
              className={`h-5 w-5 transform rounded-full bg-muted shadow-md ${
                toggle ? "translate-x-5" : ""
              } transition-transform`}
            ></div>
          </div>
        </label>
      </div>

      <Guest search={search} />
    </div>
  );
};

export default Guests;
