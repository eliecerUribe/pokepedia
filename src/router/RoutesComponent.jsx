import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
