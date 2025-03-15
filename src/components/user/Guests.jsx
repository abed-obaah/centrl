import { Link } from "react-router-dom";
import optionsImage from "../../assets/optionsImage.png";

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
    id: 2,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },

  {
    id: 3,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },

  {
    id: 4,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },

  {
    id: 5,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },

  {
    id: 6,
    label: "Cooper Franci",
    value: "Pending",
    email: "ubahobaah@gmail.com",
    age: "Aug 23",
    editable: true,
    image: optionsImage,
  },
];

const Guests = () => {
  return (
    <div className="mt-12 max-w-[761px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-500 font-700">Guests</h2>

        <Link className="rounded-xl bg-white px-4 py-2 font-500" to="/guests">
          View All
        </Link>
      </div>

      <div className="space-y-1">
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-sm bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.label} className="size-7" />
              <div>
                <p className="font-600">{item.label}</p>
              </div>
            </div>
            <p className="text-100 font-400">{item.email}</p>

            <p>{item.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guests;
