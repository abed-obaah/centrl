import { useRef, useState } from 'react';
import { Eye, EyeOff, Upload } from 'lucide-react';

const AddAdminModal = ({ isOpen, onClose, onSave }) => {
  const initialFormState = {
    fullName: '',
    username: '',
    password: '',
    role: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, avatar: avatarPreview });

    setFormData(initialFormState);
    setAvatarPreview(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleModalClose = () => {
    setFormData(initialFormState);
    setAvatarPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed z-[600] inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleModalClose}
      />
      <div className="fixed inset-0 z-[800] flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-card p-6 shadow-lg">
          <h2 className="text-200 font-600 mb-6">Add New Admin</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-100 font-500">Profile Image</label>
              <div className="flex items-center gap-4">
                {avatarPreview ? (
                  <img
                    src={avatarPreview || '/placeholder.svg'}
                    alt="Avatar preview"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <Upload className="h-6 w-6 text-foreground" />
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="rounded-lg border border-muted px-4 py-2 text-100 font-500 hover:bg-background"
                >
                  Choose Image
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-100 font-500">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-muted bg-card px-3 py-2 text-100 focus:border-primary focus:outline-none"
                placeholder="Enter full name"
                required
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
                required
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
                  required
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
                required
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
                Add Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAdminModal;
