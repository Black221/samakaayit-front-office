import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Notifications from "./Notificcations";

function Parametres() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Notifications />} />
      </Route>
    </Routes>
  );
}

export default Parametres;