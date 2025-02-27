import { Pencil, Plus, Trash2 } from 'lucide-react';
import AdminOne from '../../assets/admin-one.png';
import AdminTwo from '../../assets/admin-two.png';
import AdminThree from '../../assets/admin-three.png';
import AdminFour from '../../assets/admin-four.png';
import AdminFive from '../../assets/admin-five.png';
import { useState } from 'react';
import EditAdminsModal from '../../components/admin/EditAdminsModal';

const admins = [
  {
    id: 1,
    name: 'Joel Onyibe',
    username: '@userman',
    role: 'SuperAdmin',
    avatar: AdminOne,
  },
  {
    id: 2,
    name: 'Joel Onyibe',
    username: '@userman',
    role: 'Content Admin',
    avatar: AdminTwo,
  },
  {
    id: 3,
    name: 'Joel Onyibe',
    username: '@userman',
    role: 'Finance',
    avatar: AdminThree,
  },
  {
    id: 4,
    name: 'Joel Onyibe',
    username: '@userman',
    role: 'SuperAdmin',
    avatar: AdminFour,
  },
  {
    id: 5,
    name: 'Joel Onyibe',
    username: '@userman',
    role: 'SuperAdmin',
    avatar: AdminFive,
  },
];

const Admins = () => {
  const [selectedAdmin, setSelectedAdmin] = useState(null);

  const handleEditClick = (admin) => {
    setSelectedAdmin(admin);
  };

  const handleCloseModal = () => {
    setSelectedAdmin(null);
  };

  const handleSaveChanges = (formData) => {
    console.log('Saving changes:', formData);
    handleCloseModal();
  };

  return (
    <div className="md:ml-20 md:max-w-[1000px]">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button className="flex h-full min-h-[200px] w-full items-center justify-center rounded-xl  bg-card p-6">
          <Plus className="size-10 text-black" />
        </button>

        {admins.map((admin) => (
          <div key={admin.id}>
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex mb-8 items-center gap-4">
                <img
                  src={admin.avatar}
                  alt={admin.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-100 font-600">{admin.name}</h3>
                  <p className="text-50 text-foreground">{admin.username}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="mb-8">
                  <p className="text-100 font-600 text-black">Role</p>
                  <p className="text-50 font-500 text-foreground">
                    {admin.role}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="rounded-lg p-2 bg-background"
                    onClick={() => handleEditClick(admin)}
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button className="rounded-lg p-2 text-secondary bg-background">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedAdmin && (
        <EditAdminsModal
          admin={selectedAdmin}
          isOpen={!!selectedAdmin}
          onClose={handleCloseModal}
          onSave={handleSaveChanges}
        />
      )}
    </div>
  );
};

export default Admins;
