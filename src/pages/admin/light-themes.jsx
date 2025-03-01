import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const ThemeCard = ({ gradient, label, onClick }) => (
  <div className="space-y-2 cursor-pointer" onClick={onClick}>
    <div className={`h-24 w-full rounded-lg ${gradient}`} />
    <p className="text-50 text-foreground">{label}</p>
  </div>
);

const LightThemes = () => {
  const navigate = useNavigate();

  const handleThemeClick = (theme) => {
    navigate('/admin-themes/sample', {
      state: { backgroundColor: theme.gradient },
    });
  };
  const themes = [
    { gradient: 'bg-[#4ADE80]', label: 'Mono' },
    {
      gradient: 'bg-gradient-to-r from-[#38BDF8] to-[#3B82F6]',
      label: 'Gradient',
    },
    { gradient: 'bg-[#A855F7]', label: 'Mono' },
    { gradient: 'bg-[#EC4899]', label: 'Mono' },
    { gradient: 'bg-[#F9A8D4]', label: 'Name' },
    { gradient: 'bg-[#E7E5E4]', label: 'Name' },
    { gradient: 'bg-[#B45309]', label: 'Gradient' },
    { gradient: 'bg-[#E5E5E5]', label: 'Mono' },
    { gradient: 'bg-[#D1D5DB]', label: 'None' },
    { gradient: 'bg-[#D4B69C]', label: 'Mono' },
    { gradient: 'bg-[#991B1B]', label: 'Gradient' },
    { gradient: 'bg-[#E5E5E5]', label: 'Mono' },
    { gradient: 'bg-[#D1D5DB]', label: 'None' },
    { gradient: 'bg-[#D4B69C]', label: 'Mono' },
    { gradient: 'bg-[#991B1B]', label: 'Gradient' },
    { gradient: 'bg-[#E5E5E5]', label: 'Mono' },
    { gradient: 'bg-[#D1D5DB]', label: 'None' },
    { gradient: 'bg-[#D4B69C]', label: 'Mono' },
    { gradient: 'bg-[#991B1B]', label: 'Gradient' },
    { gradient: 'bg-[#E5E5E5]', label: 'Mono' },
    { gradient: 'bg-[#D1D5DB]', label: 'None' },
    { gradient: 'bg-[#D4B69C]', label: 'Mono' },
    { gradient: 'bg-[#991B1B]', label: 'Gradient' },
    { gradient: 'bg-[#E5E5E5]', label: 'Mono' },
    { gradient: 'bg-[#D1D5DB]', label: 'None' },
  ];

  return (
    <div className="md:ml-[10rem] md:max-w-[1000px] mt-24 px-4">
      <Link
        to="/admin-themes"
        className="flex items-center gap-2 text-100 text-[red] fixed left-8 top-16  z-[500] font-700"
      >
        <ArrowLeft className="h-4 w-4 text-[red]" />
        Back
      </Link>

      <div className="mb-8 flex items-center gap-4">
        <h1 className="text-200 font-600">Light Themes</h1>
      </div>

      {/* Themes Grid */}
      <div className="grid gap-6 grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {themes.map((theme, index) => (
          <ThemeCard
            key={index}
            {...theme}
            onClick={() => handleThemeClick(theme)}
          />
        ))}
      </div>
    </div>
  );
};

export default LightThemes;
