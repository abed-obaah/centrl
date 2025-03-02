import TechnologyImg from '../../assets/receipt-tickets.png';
import BusinessImg from '../../assets/people.png';
import ConcertImg from '../../assets/qr-image.png';
import EducationImg from '../../assets/home.png';
import PartiesImg from '../../assets/parties.png';
import OthersImg from '../../assets/sfsfs.png';
import { Search, Download } from 'lucide-react';
import Guest from '../../components/gueste';
import { useState } from "react";

const cards = [
  {
    id: 1,
    name: 'Registration',
    description: 'Open',
    imgUrl: TechnologyImg,
  },
  {
    id: 2,
    name: 'Event Capacity',
    description: 'Unlimited',
    imgUrl: BusinessImg,
  },
  {
    id: 3,
    name: 'Check In Guests ',
    description: '',
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
    guest.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:ml-[4.6rem] md:max-w-[1000px]">
       <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-300 font-600">Guests</h1>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-lg border border-muted bg-card px-4 py-2 text-100 font-500 hover:bg-background">
            <Download className="h-4 w-4" />
            Download
          </button>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 space-y-8 md:space-y-0 md:gap-6 lg:grid-cols-3">
  {cards.map((card) => (
    <div
      key={card.id}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex justify-center"
    >
      <div className="bg-[#fff] rounded-3xl p-6 flex flex-col justify-between h-full min-h-[180px] w-[280px]">
        <img
          className="size-10 object-contain mb-8"
          src={card.imgUrl}
          alt={card.name}
        />

        <div>
          <h3 className="text-200 font-600">{card.name}</h3>
          <p className="text-[#B0B0B0]">{card.description || '\u00A0'}</p>
        </div>
      </div>
    </div>
  ))}
</div>
<div className="flex items-center bg-background border rounded-2xl px-4 py-1.5  w-[300px] mt-10">
<input
  type="text"
  placeholder="Search guests"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="border-0 p-2 flex-1 outline-none bg-background focus:ring-0 focus:border-none"

/>

  <label className="inline-flex items-center ml-2 cursor-pointer">
    <input
      type="checkbox"
      checked={toggle}
      onChange={() => setToggle(!toggle)}
      className="sr-only"
    />
    <div
      className={`w-5 h-5 flex items-center bg-muted rounded-full p-1 ${
        toggle ? "bg-muted" : ""
      }`}
    >
      <div
        className={`bg-muted w-5 h-5 rounded-full shadow-md transform ${
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
