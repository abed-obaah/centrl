import { Plus } from 'lucide-react';
import { AdminThemeCard } from '../../components/admin/AdminThemeCard';
import { Link } from 'react-router-dom';

const Themes = () => {
  const popularThemes = [
    {
      gradient: 'bg-[#4ADE80]',
      label: 'Mono',
    },
    {
      gradient: 'bg-gradient-to-r from-[#38BDF8] to-[#3B82F6]',
      label: 'Gradient',
    },
    {
      gradient: 'bg-[#A855F7]',
      label: 'Name',
    },
    {
      gradient: 'bg-[#EC4899]',
      label: 'Name',
    },
    {
      gradient: 'bg-[#D4B69C]',
      label: 'Mono',
    },
    {
      gradient: 'bg-[#991B1B]',
      label: 'Gradient',
    },
    {
      gradient: 'bg-[#E5E5E5]',
      label: 'Name',
    },
    {
      gradient: 'bg-[#D1D5DB]',
      label: 'Name',
    },
  ];

  const allThemes = [
    {
      gradient: 'bg-black',
      label: 'Mono',
    },
    {
      gradient: 'bg-gradient-to-r from-[#38BDF8] to-[#3B82F6]',
      label: 'Gradient',
    },
    {
      gradient: 'bg-[#E5E5E5]',
      label: 'Name',
    },
    {
      gradient: 'bg-[#D1D5DB]',
      label: 'Name',
    },
    {
      gradient: 'bg-[#D4B69C]',
      label: 'Mono',
    },
    {
      gradient: 'bg-gradient-to-r from-[#38BDF8] to-[#3B82F6]',
      label: 'Gradient',
    },
    {
      gradient: 'bg-[#E5E5E5]',
      label: 'Name',
    },
    {
      gradient: 'bg-[#D1D5DB]',
      label: 'Name',
    },
  ];

  return (
    <div className="md:ml-20 md:max-w-[1000px] bg-card p-10 rounded-lg">
      {/* Theme Type Selection */}
      <div className="grid gap-8 grid-cols-2 mb-20 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex h-[120px] items-center justify-center rounded-xl  bg-background p-6">
          <Plus className="size-10 text-black" />
        </div>

        <Link
          to="/admin-themes/light"
          className="h-[120px]  relative rounded-xl bg-background"
        >
          <div className="absolute   bottom-2 left-4">
            <p className="font-600 text-200">Light</p>
            <p className="font-500">Theme</p>
          </div>
        </Link>

        <div className="h-[120px]  relative rounded-xl bg-background">
          <div className="absolute   bottom-2 left-4">
            <p className="font-600 text-200">Dark</p>
            <p className="font-500">Theme</p>
          </div>
        </div>

        <div className="h-[120px]  relative rounded-xl bg-background">
          <div className="absolute   bottom-2 left-4">
            <p className="font-600 text-200">Dynamic</p>
            <p className="font-500">Theme</p>
          </div>
        </div>
      </div>

      {/* Popular Themes Section */}
      <div className="mb-20">
        <h2 className="mb-4 text-200 font-600">Popular themes</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularThemes.map((theme, index) => (
            <AdminThemeCard key={index} {...theme} />
          ))}
        </div>
      </div>

      <hr className="text-[#000]/15" />

      {/* All Themes Section */}
      <div className="mt-20">
        <h2 className="mb-4 text-200 font-600">All themes</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {allThemes.map((theme, index) => (
            <AdminThemeCard key={index} {...theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
