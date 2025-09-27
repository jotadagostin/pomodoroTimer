import { Link } from "react-router";
import arrowSetting from "../assets/arrow_settings.svg";
import checkSvg from "../assets/check.svg";
import { Switch } from "../components/Switch";
import { useState } from "react";

export default function Configs() {
  const [checked, setChecked] = useState(false);
  return (
    <div className=" bg-[var(--text-default-inverse)] flex flex-col justify-between items-center w-[412px] h-[256px] rounded-xl">
      <header className="w-[412px] h-[45px]  flex flex-col justify-center items-start  border-b-1 border-[var(--bg-paper)] ">
        <Link to={"/"}>
          <h1 className="flex gap-4 relative text-[var(--text-default)] pl-4">
            <img src={arrowSetting} alt="" />
            Settings
          </h1>
        </Link>
      </header>
      <main className="w-[412px] h-[191px] flex px-5  flex-col gap-6">
        <Switch />

        {/* auto-transition-input */}
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />

          <div
            className={`w-6 h-6 border border-gray-400 flex items-center justify-center transition-colors ${
              checked ? "bg-[#A0CCFF]" : "bg-gray-300"
            }`}
          >
            {checked && (
              <img src={checkSvg} alt="Checked" className="w-4 h-4" />
            )}
          </div>

          <h4 className="ms-3 text-[var(--text-default)]">
            Auto-transition timer
          </h4>
        </label>

        {/* Focus-Break-Rest INPUT */}

        <div className="flex  gap-4 w-60">
          {/* Focus */}
          <div className="flex flex-col items-start justify-between gap-1">
            <label className="text-[var(--text-default)]">Focus</label>
            <input
              type="number"
              min={1}
              max={180}
              className="w-28 p-1 text-center border border-gray-500 rounded bg-[var(--bg-paper)]"
            />
          </div>

          {/* Break */}
          <div className="flex  flex-col items-start justify-between">
            <label className="text-[var(--text-default)]">Break</label>
            <input
              type="number"
              min={1}
              max={60}
              className="w-28 p-1 text-center border border-gray-500 rounded bg-[var(--bg-paper)]"
            />
          </div>

          {/* Rest */}
          <div className="flex flex-col items-start justify-between">
            <label className="text-[var(--text-default)]">Rest</label>
            <input
              type="number"
              min={1}
              max={120}
              className="w-28 p-1 text-center border border-gray-500 rounded bg-[var(--bg-paper)]"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
