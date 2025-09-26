import restartSvg from "../assets/restart.svg";
import configSvg from "../assets/configs.svg";
import { Button } from "../components/Button";

export function Pomodoro() {
  return (
    <div className=" bg-[var(--text-default-inverse)] flex flex-col justify-between items-center w-[412px] h-[256px] rounded-xl">
      <header className="w-[412px] h-[45px]  flex flex-col items-center justify-center border-b-1 border-[var(--bg-paper)] ">
        <nav className="w-[412px] flex  justify-around">
          <button
            className="relative text-[var(--text-hint)] pb-3 pt-3
  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--text-default)] after:transition-all after:duration-200
  hover:after:w-[250%] hover:after:-translate-x-3/10 hover:text-[var(--text-default)] "
          >
            Focus
          </button>
          <button
            className=" relative text-[var(--text-hint)] pb-3 pt-3
  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--text-default)] after:transition-all after:duration-200
  hover:after:w-[250%] hover:after:-translate-x-3/10 hover:text-[var(--text-default)] "
          >
            Break
          </button>
          <button
            className=" relative text-[var(--text-hint)] pb-3 pt-3
  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[var(--text-default)] after:transition-all after:duration-200
  hover:after:w-[250%] hover:after:-translate-x-3/10 hover:text-[var(--text-default)] "
          >
            Rest
          </button>
        </nav>
      </header>
      <main className="w-[412px] flex-1 flex flex-col justify-center items-center gap-5">
        <div className="w-[186px]  flex  justify-center items-center">
          <span>30</span>
          <span>:</span>
          <span>00</span>
        </div>
        <div className=" w-[412px] h-[45px]  flex  justify-center items-center gap-5.5">
          <button className="cursor-pointer hover:brightness-0 hover:invert">
            <img src={restartSvg} alt="restart icon" />
          </button>

          <Button />
          <button className="cursor-pointer hover:brightness-0 hover:invert duration-200">
            <img src={configSvg} alt="config icon" />
          </button>
        </div>
      </main>
    </div>
  );
}
