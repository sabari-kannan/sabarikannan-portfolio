import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-cyan-500 text-white shadow-lg hover:scale-110 transition"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeToggle;