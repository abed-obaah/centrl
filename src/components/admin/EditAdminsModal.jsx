import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const EditAdminsModal = ({ admin, isOpen, onClose, onSave }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: admin.name,
    username: admin.username,
    password: '',
    role: admin.role,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[600] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-card p-6 shadow-lg">
          <div className="mb-6 flex items-center gap-3">
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-100 font-500">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-muted bg-card px-3 py-2 text-100 focus:border-primary focus:outline-none"
                placeholder="Enter full name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-100 font-500">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-muted bg-card px-3 py-2 text-100 focus:border-primary focus:outline-none"
                placeholder="Enter username"
              />
            </div>

            <div className="space-y-2">
              <label className="text-100 font-500">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-muted bg-card px-3 py-2 text-100 focus:border-primary focus:outline-none"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-100 font-500">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-muted bg-card px-3 py-2 text-100 focus:border-primary focus:outline-none"
              >
                <option value="">Select role</option>
                <option value="SuperAdmin">SuperAdmin</option>
                <option value="Content Admin">Content Admin</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-muted px-4 py-2 text-100 font-500 hover:bg-background"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-100 font-500 text-white"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditAdminsModal;
