import { Route, Routes } from "react-router";
import { Pomodoro } from "../pages/Pomorodo";
import Configs from "../pages/Configs";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pomodoro />} />
      <Route path="/configs" element={<Configs />} />
      <Route />
    </Routes>
  );
}
