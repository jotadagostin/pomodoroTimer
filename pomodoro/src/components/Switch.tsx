import { useState } from "react";
import darkModeSvg from "../assets/darkmode.svg";
import lightModeSvg from "../assets/lightmode.svg";

export function Switch() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="mt-1 pr-3">
      <label className="inline-flex items-center cursor-pointer relative">
        {/* Input escondido */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />

        {/* Trilha do switch */}
        <div
          className={`border-2 border-gray-500 w-18 h-9 transition-colors ${
            darkMode
              ? "bg-gray-800"
              : "bg-[var(--text-default-inverse)] peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
          }`}
        ></div>

        {/* Botão deslizante */}
        <div
          className={`border-2 border-gray-500 absolute top-0 left-0 w-9 h-9 flex items-center justify-center transition-transform peer-checked:translate-x-9 ${
            darkMode ? "bg-[#A0CCFF]" : "bg-[var(--text-default-inverse)]"
          }`}
        >
          <img
            src={darkMode ? darkModeSvg : lightModeSvg}
            alt={darkMode ? "Dark mode" : "Light mode"}
            className="w-4 h-4"
          />
        </div>

        {/* Texto */}
        <h2 className="ms-3 text-[16px] text-gray-900 dark:text-gray-300">
          dark mode
        </h2>
      </label>
    </div>
  );
}
