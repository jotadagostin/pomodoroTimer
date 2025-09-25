import restartSvg from "../assets/restart.svg";
import configSvg from "../assets/configs.svg";

export function Pomodoro() {
  return (
    <div className=" bg-[var(--bg-paper)] flex flex-col justify-center items-center w-[412px] h-[256px] rounded-xl">
      <header className="w-full h-full flex flex-col items-center">
        <nav className="flex gap-20">
          <button className=" text-[var(--text-hint)] hover:border-b-2 hover:border-[var(--text-default)]">
            Focus
          </button>
          <button className=" text-[var(--text-hint)] hover: hover:border-b-2 hover:border-[var(--text-default)] ">
            Break
          </button>
          <button className=" text-[var(--text-hint)] hover: hover:border-b-2 hover:border-[var(--text-default)]">
            Rest
          </button>
        </nav>
      </header>
      <main className="p-6">
        <div>
          <span>30</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div>
          <button>
            <img src={restartSvg} alt="" />
          </button>
          <button>Start</button>
          <button>
            <img src={configSvg} alt="" />
          </button>
        </div>
      </main>
    </div>
  );
}
