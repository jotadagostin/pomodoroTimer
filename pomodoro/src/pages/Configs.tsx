import { Link } from "react-router";
import arrowSetting from "../assets/arrow_settings.svg";
import { Switch } from "../components/Switch";

export default function Configs() {
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
      <main className="w-[412px] h-[191px] flex px-5">
        <Switch />
      </main>
    </div>
  );
}
