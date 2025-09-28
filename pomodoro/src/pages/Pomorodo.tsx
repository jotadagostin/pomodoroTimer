import restartSvg from "../assets/restart.svg";
import configSvg from "../assets/configs.svg";
import { Button } from "../components/Button";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

type Mode = "Focus" | "Break" | "Rest";

export function Pomodoro() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState<Mode>("Focus");
  const [autoTransition, setAutoTransition] = useState(false);

  const { darkMode } = useTheme();

  // Load the configs in the localStorage
  const focusTime = Number(localStorage.getItem("focusTime")) || 25;
  const breakTime = Number(localStorage.getItem("breakTime")) || 5;
  const restTime = Number(localStorage.getItem("restTime")) || 15;

  useEffect(() => {
    const storedAuto = localStorage.getItem("autoTransition");
    setAutoTransition(storedAuto === "true");
  }, []);

  // Update the time when the mode change:
  useEffect(() => {
    switch (mode) {
      case "Focus":
        setTime(focusTime * 60);
        break;
      case "Break":
        setTime(breakTime * 60);
        break;
      case "Rest":
        setTime(restTime * 60);
        break;
    }
  }, [mode, focusTime, breakTime, restTime]);

  // Countdown
  useEffect(() => {
    if (!running) return;
    if (time <= 0) return;

    const interval = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [running, time]);

  // Auto-transition when time is = 0
  useEffect(() => {
    if (time === 0 && running && autoTransition) {
      switch (mode) {
        case "Focus":
          setMode("Break");
          break;
        case "Break":
          setMode("Rest");
          break;
        case "Rest":
          setMode("Focus");
          break;
      }
    }
  }, [time, running, autoTransition, mode]);

  // Formatar mm:ss
  function getTimeParts(sec: number) {
    const minutes = String(Math.floor(sec / 60)).padStart(2, "0");
    const seconds = String(sec % 60).padStart(2, "0");
    return { minutes, seconds };
  }

  const { minutes, seconds } = getTimeParts(time);

  // Restart
  function handleRestart() {
    switch (mode) {
      case "Focus":
        setTime(focusTime * 60);
        break;
      case "Break":
        setTime(breakTime * 60);
        break;
      case "Rest":
        setTime(restTime * 60);
        break;
    }
    setRunning(false);
  }

  return (
    <div
      className={`flex flex-col justify-between items-center w-[412px] h-[256px] rounded-xl transition-colors ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <header
        className={`w-[412px] h-[45px] flex flex-col items-center justify-center border-b ${
          darkMode ? "border-gray-700" : "border-gray-300"
        }`}
      >
        <nav className="w-[412px] flex justify-around ">
          {(["Focus", "Break", "Rest"] as Mode[]).map((m) => (
            <button
              key={m}
              className={`relative pb-3 pt-3 cursor-pointer ${
                mode === m
                  ? darkMode
                    ? "text-white"
                    : "text-black"
                  : darkMode
                  ? "text-gray-400"
                  : "text-gray-500"
              }`}
              onClick={() => setMode(m)}
            >
              {m}
            </button>
          ))}
        </nav>
      </header>

      <main className="w-[412px] flex-1 flex flex-col justify-center items-center gap-5">
        <div className="w-[186px] flex justify-center items-center text-5xl font-bold">
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>

        <div className="w-[412px] h-[45px] flex justify-center items-center gap-6">
          {/* Restart */}
          <button
            className={`cursor-pointer duration-200 ${
              darkMode ? "invert" : "hover:invert"
            }`}
            onClick={handleRestart}
          >
            <img src={restartSvg} alt="restart icon" />
          </button>

          {/* Start/Pause */}
          <Button running={running} onToggle={() => setRunning(!running)} />

          {/* Config */}
          <Link to={"/configs"}>
            <button
              className={`cursor-pointer duration-200 ${
                darkMode ? "invert" : "hover:invert"
              }`}
            >
              <img src={configSvg} alt="config icon" />
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
