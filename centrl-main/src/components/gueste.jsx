import optionsImage from "../assets/optionsImage.png";

const itemsData = [
  {
    id: 1,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },
  {
    id: 3,
    label: "Abram Lubin",
    value: "Aug 23",
    email: "ubahobaah@gmail.com",
    age: "",
    image: optionsImage,
  },
  {
    id: 4,
    label: "Makenna Korsgaard",
    value: "Aug 23",
    email: "ubahobaah@gmail.com",
    age: "",
    editable: true,
    image: optionsImage,
  },
  {
    id: 5,
    label: "Ahmad Siphron",
    value: "Aug 23",
    email: "ubahobaah@gmail.com",
    age: "",
    image: optionsImage,
  },
  {
    id: 6,
    label: "Aspen Herwitz",
    value: "Aug 23",
    email: "ubahobaah@gmail.com",
    age: "",
    image: optionsImage,
  },
];

export default function MoreOptions({ search = "" }) {
  const filteredItems = itemsData.filter((item) =>
    (item.label || "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ul role="list" className="space-y- mr-auto mt-5 max-w-[744px]">
      <label className="mb-2 block text-100 font-500">More options</label>
      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <li
            key={item.id}
            className="overflow-hidden bg-white px-4 py-4 shadow-sm sm:rounded-md sm:px-3"
          >
            <div className="flex items-center gap-4">
              <div className="flex min-w-0 flex-[1.5] items-center">
                <img
                  src={item.image}
                  alt={item.label}
                  className="mr-2 h-10 w-10 flex-shrink-0"
                />
                <span className="truncate text-100 font-400">{item.label}</span>
              </div>
              <div className="min-w-0 flex-[1] text-left">
                <span className="truncate text-100 font-400">{item.email}</span>
              </div>
              <div className="min-w-0 flex-[1] text-left">
                <span className="truncate text-100 font-400">{item.age}</span>
              </div>
              <div className="flex flex-shrink-0 items-center">
                <div className="flex items-center gap-2">
                  <span className="text-50 font-500 text-muted50">
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p className="text-center text-muted50">No guests found.</p>
      )}
    </ul>
  );
}
