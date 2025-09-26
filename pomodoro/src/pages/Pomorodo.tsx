import restartSvg from "../assets/restart.svg";
import configSvg from "../assets/configs.svg";

export function Pomodoro() {
  return (
    <div className=" bg-[var(--text-default-inverse)] flex flex-col justify-between items-center w-[412px] h-[256px] rounded-xl">
      <header className="w-[412px] h-[45px]   flex flex-col items-center justify-center">
        <nav className="flex gap-20">
          <button className=" text-[var(--text-hint)] hover:border-b-2 hover:border-[var(--text-default)]">
            Focus
          </button>
          <button className=" text-[var(--text-hint)] hover: hover:border-b-2  hover:border-[var(--text-default)] ">
            Break
          </button>
          <button className=" text-[var(--text-hint)] hover: hover:border-b-2 hover:border-[var(--text-default)]">
            Rest
          </button>
        </nav>
      </header>
      <main className="w-[412px] h-[205px] flex flex-col justify-center items-center">
        <div className="w-[186px] h-[77px] flex  justify-center items-center">
          <span>30</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div className="w-[192px] h-[40px] flex justify-center items-center gap-2.5">
          <button>
            <img src={restartSvg} alt="" />
          </button>
          <button className="bg-[var(--text-primary)]">Start</button>
          <button>
            <img src={configSvg} alt="" />
          </button>
        </div>
      </main>
    </div>
  );
}
