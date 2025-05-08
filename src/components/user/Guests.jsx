import { Link } from "react-router-dom";
import optionsImage from "../../assets/optionsImage.png";
import { useFetch } from "../../hooks/useFetch";
import { getUserInvitations } from "../../api/eventApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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

const Guests = ({ userId }) => {
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await getUserInvitations(userId, token);
        console.log(response);
      } catch (error) {
        console.log("Error fetching invitations:", error);
      }
    };

    fetchInvitations();
  }, [userId, token]);

  // const { data: eventData } = useFetch({
  //   queryKey: ["userInvite", token],
  //   fetcher: () => getUserInvitations(userId, token),
  // });

  // console.log("guest event data", eventData);

  return (
    <div className="mt-12 max-w-[761px]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-300 font-600">Guests</h2>

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
