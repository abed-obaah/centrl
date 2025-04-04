const getColorFromName = (name) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

const getInitial = (name) => {
  if (!name) return "?";
  return name.charAt(0).toUpperCase();
};

const AvatarFallback = ({ name, size = "md", className = "" }) => {
  const initial = getInitial(name);
  const bgColor = getColorFromName(name);

  // Size classes
  const sizeClasses = {
    xs: "size-6 text-xs",
    sm: "size-8 text-sm",
    md: "size-10 text-base",
    lg: "size-12 text-lg",
    xl: "size-16 text-xl",
    "2xl": "size-20 text-2xl",
    full: "h-full w-full text-3xl",
  };

  return (
    <div
      className={`font-medium flex items-center justify-center rounded-full text-white ${bgColor} ${sizeClasses[size]} ${className}`}
      aria-label={name}
    >
      {initial}
    </div>
  );
};

export default AvatarFallback;
