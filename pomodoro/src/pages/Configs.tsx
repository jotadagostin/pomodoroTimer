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
  //   <div className=" bg-[var(--text-default-inverse)] flex flex-col justify-between items-center w-[412px] h-[256px] rounded-xl">
  //     <header className="w-[412px] h-[45px]  flex flex-col justify-center items-start  border-b-1 border-[var(--bg-paper)] ">
  //       <Link to={"/"}>
  //         <h1 className="flex gap-4 relative text-[var(--text-default)] pl-4">
  //           <img src={arrowSetting} alt="" />
  //           Settings
  //         </h1>
  //       </Link>
  //     </header>
  //     <main className="w-[412px] h-[191px] flex px-5  flex-col gap-6">
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
  //           className={`w-6 h-6 border border-gray-400 flex items-center justify-center transition-colors ${
  //             autoTransition ? "bg-[#A0CCFF]" : "bg-gray-300"
  //           }`}
  //         >
  //           {autoTransition && (
  //             <img src={checkSvg} alt="Checked" className="w-4 h-4" />
  //           )}
  //         </div>

  //         <h4 className="ms-3 text-[var(--text-default)]">
  //           Auto-transition timer
  //         </h4>
  //       </label>

  //       {/* Focus-Break-Rest INPUT */}

  //       <div className="flex  gap-4 w-60">
  //         {/* Focus */}
  //         <div className="flex flex-col items-start justify-between gap-1">
  //           <label className="text-[var(--text-default)]">Focus</label>
  //           <input
  //             type="number"
  //             min={1}
  //             max={180}
  //             value={focusTime}
  //             onChange={(e) => setFocusTime(Number(e.target.value))}
  //             className="w-28 p-1 text-center border border-gray-500 rounded bg-[var(--bg-paper)] text-[var(--text-default)]"
  //           />
  //         </div>
  //         {/* Break */}
  //         <div className="flex  flex-col items-start justify-between">
  //           <label className="text-[var(--text-default)]">Break</label>
  //           <input
  //             type="number"
  //             min={1}
  //             max={60}
  //             value={breakTime}
  //             onChange={(e) => setBreakTime(Number(e.target.value))}
  //             className="w-28 p-1 text-center border border-gray-500 rounded bg-[var(--bg-paper)] text-[var(--text-default)]"
  //           />
  //         </div>
  //         {/* Rest */}
  //         <div className="flex flex-col items-start justify-between">
  //           <label className="text-[var(--text-default)]">Rest</label>
  //           <input
  //             type="number"
  //             min={1}
  //             max={120}
  //             value={restTime}
  //             onChange={(e) => setRestTime(Number(e.target.value))}
  //             className="w-28 p-1 text-center border border-gray-500 rounded bg-[var(--bg-paper)] text-[var(--text-default)]"
  //           />
  //         </div>
  //       </div>
  //     </main>
  //     <button
  //       onClick={handleSave}
  //       className="w-[370px] h-[35px] flex items-center justify-center  mt-1  mb-1 px-1 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
  //     >
  //       Save
  //     </button>
  //   </div>
  // );

  return (
    <div
      className={`flex flex-col justify-between items-center w-[412px] h-[256px] rounded-xl transition-colors
        ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <header
        className={`w-[412px] h-[45px] flex flex-col justify-center items-start border-b 
        ${darkMode ? "border-gray-700" : "border-gray-300"}`}
      >
        <Link to={"/"}>
          <h1 className="flex gap-4 relative pl-4">
            <img src={arrowSetting} alt="" />
            Settings
          </h1>
        </Link>
      </header>

      <main className="w-[412px] h-[191px] flex px-5 flex-col gap-6">
        <Switch />

        {/* auto-transition-input */}
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
          <h4 className="ms-3">Auto-transition timer</h4>
        </label>

        {/* Focus-Break-Rest INPUT */}
        <div className="flex gap-4 w-60">
          {[
            { label: "Focus", value: focusTime, set: setFocusTime, max: 180 },
            { label: "Break", value: breakTime, set: setBreakTime, max: 60 },
            { label: "Rest", value: restTime, set: setRestTime, max: 120 },
          ].map(({ label, value, set, max }) => (
            <div key={label} className="flex flex-col items-start gap-1">
              <label>{label}</label>
              <input
                type="number"
                min={1}
                max={max}
                value={value}
                onChange={(e) => set(Number(e.target.value))}
                className={`w-28 p-1 text-center border rounded 
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

      <button
        onClick={handleSave}
        className={`w-[370px] h-[35px] flex items-center justify-center mt-1 mb-1 px-1 py-1 rounded transition cursor-pointer
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
