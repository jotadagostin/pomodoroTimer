import { Link } from "react-router";
import arrowSetting from "../assets/arrow_settings.svg";
import checkSvg from "../assets/check.svg";
import { Switch } from "../components/Switch";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Configs() {
  // const [checked, setChecked] = useState(false);
  const { darkMode } = useTheme();

  //Input states:
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [restTime, setRestTime] = useState(15);
  const [autoTransition, setAutoTransition] = useState(false);

  //Load in the LocalStorage:

  useEffect(() => {
    const storedFocus = localStorage.getItem("focusTime");
    const storedBreak = localStorage.getItem("breakTime");
    const storedRest = localStorage.getItem("restTime");
    const storedAuto = localStorage.getItem("autoTransition");

    if (storedFocus) setFocusTime(Number(storedFocus));
    if (storedBreak) setBreakTime(Number(storedBreak));
    if (storedRest) setRestTime(Number(storedRest));
    if (storedAuto) setAutoTransition(storedAuto === "true");
  }, []);

  //Save in LocalStorage:

  function handleSave() {
    localStorage.setItem("focusTime", String(focusTime));
    localStorage.setItem("breakTime", String(breakTime));
    localStorage.setItem("restTime", String(restTime));
    localStorage.setItem("autoTransition", String(autoTransition));
    alert("Configs salved!");
  }

  // return (
  //   <div
  //     className={`flex flex-col justify-between items-center w-[542px] h-[346px] rounded-xl transition-colors
  //       ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
  //   >
  //     <header
  //       className={`w-[412px] h-[45px] flex flex-col justify-center items-start border-b
  //       ${darkMode ? "border-gray-700" : "border-gray-300"}`}
  //     >
  //       <Link to={"/"}>
  //         <h1 className="flex gap-4 relative pl-4">
  //           <img src={arrowSetting} alt="" />
  //           Settings
  //         </h1>
  //       </Link>
  //     </header>

  //     <main className="w-[412px] h-[191px] flex px-5 flex-col gap-6">
  //       <Switch />

  //       {/* auto-transition-input */}
  //       <label className="relative inline-flex items-center cursor-pointer">
  //         <input
  //           type="checkbox"
  //           className="sr-only"
  //           checked={autoTransition}
  //           onChange={() => setAutoTransition(!autoTransition)}
  //         />
  //         <div
  //           className={`w-6 h-6 border flex items-center justify-center transition-colors
  //             ${darkMode ? "border-gray-600" : "border-gray-400"}
  //             ${
  //               autoTransition
  //                 ? "bg-blue-400"
  //                 : darkMode
  //                 ? "bg-gray-700"
  //                 : "bg-gray-300"
  //             }`}
  //         >
  //           {autoTransition && (
  //             <img src={checkSvg} alt="Checked" className="w-4 h-4" />
  //           )}
  //         </div>
  //         <h4 className="ms-3">Auto-transition timer</h4>
  //       </label>

  //       {/* Focus-Break-Rest INPUT */}
  //       <div className="flex gap-4 w-60">
  //         {[
  //           { label: "Focus", value: focusTime, set: setFocusTime, max: 180 },
  //           { label: "Break", value: breakTime, set: setBreakTime, max: 60 },
  //           { label: "Rest", value: restTime, set: setRestTime, max: 120 },
  //         ].map(({ label, value, set, max }) => (
  //           <div key={label} className="flex flex-col items-start gap-1">
  //             <label>{label}</label>
  //             <input
  //               type="number"
  //               min={1}
  //               max={max}
  //               value={value}
  //               onChange={(e) => set(Number(e.target.value))}
  //               className={`w-28 p-1 text-center border rounded
  //                 ${
  //                   darkMode
  //                     ? "bg-gray-800 border-gray-600 text-white"
  //                     : "bg-gray-100 border-gray-400 text-black"
  //                 }`}
  //             />
  //           </div>
  //         ))}
  //       </div>
  //     </main>

  //     <button
  //       onClick={handleSave}
  //       className={`w-[370px] h-[35px] flex items-center justify-center  mb-4 rounded transition cursor-pointer
  //         ${
  //           darkMode
  //             ? "bg-gray-700 text-white hover:bg-gray-600"
  //             : "bg-gray-500 text-white hover:bg-gray-600"
  //         }`}
  //     >
  //       Save
  //     </button>
  //   </div>
  // );
  return (
    <div
      className={`flex flex-col justify-between items-center 
        w-[380px] h-[356px] md:w-[542px] md:h-[346px]
        rounded-xl transition-colors p-4 sm:p-6
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      {/* Header */}
      <header
        className={`w-full h-[45px] flex items-center justify-start border-b px-4 
        ${darkMode ? "border-gray-700" : "border-gray-300"}`}
      >
        <Link to={"/"} className="flex gap-3 items-center">
          <img
            src={arrowSetting}
            alt="back"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <h1 className="text-base sm:text-lg font-medium">Settings</h1>
        </Link>
      </header>

      {/* Main */}
      <main className="w-full flex flex-col gap-6 mt-4">
        <Switch />

        {/* Auto-transition */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={autoTransition}
            onChange={() => setAutoTransition(!autoTransition)}
          />
          <div
            className={`w-6 h-6 border flex items-center justify-center transition-colors
              ${darkMode ? "border-gray-600" : "border-gray-400"}
              ${
                autoTransition
                  ? "bg-blue-400"
                  : darkMode
                  ? "bg-gray-700"
                  : "bg-gray-300"
              }`}
          >
            {autoTransition && (
              <img src={checkSvg} alt="Checked" className="w-4 h-4" />
            )}
          </div>
          <h4 className="ms-3 text-sm sm:text-base">Auto-transition timer</h4>
        </label>

        {/* Focus/Break/Rest inputs */}
        <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full justify-between">
          {[
            { label: "Focus", value: focusTime, set: setFocusTime, max: 180 },
            { label: "Break", value: breakTime, set: setBreakTime, max: 60 },
            { label: "Rest", value: restTime, set: setRestTime, max: 120 },
          ].map(({ label, value, set, max }) => (
            <div key={label} className="flex flex-col items-start gap-1 flex-1">
              <label className="text-sm sm:text-base">{label}</label>
              <input
                type="number"
                min={1}
                max={max}
                value={value || ""}
                onChange={(e) => set(Number(e.target.value))}
                className={`w-full p-1 text-center border rounded 
                  ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 text-white"
                      : "bg-gray-100 border-gray-400 text-black"
                  }`}
              />
            </div>
          ))}
        </div>
      </main>

      {/* Save button */}
      <button
        onClick={handleSave}
        className={`w-full h-[40px] mt-6 rounded transition cursor-pointer
          ${
            darkMode
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-500 text-white hover:bg-gray-600"
          }`}
      >
        Save
      </button>
    </div>
  );
}
