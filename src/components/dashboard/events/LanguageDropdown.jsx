import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const languages = [
  "English",
  "Spanish",
  "French",
  "Swahili",
  "Yoruba",
  "Igbo",
  "Hausa",
];

export default function LanguageDropdown({
  selectedLanguage,
  onSelectLanguage,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-sm font-medium flex items-center text-black"
      >
        {selectedLanguage || "Add"}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-8 z-10 w-48 rounded-md bg-white py-1 shadow-lg">
          <div className="max-h-60 overflow-auto">
            {languages.map((language) => (
              <button
                key={language}
                onClick={() => {
                  onSelectLanguage(language);
                  setIsOpen(false);
                }}
                className="text-sm block w-full px-4 py-2 text-left hover:bg-[#f3f4f6]"
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
