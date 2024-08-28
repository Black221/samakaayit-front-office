import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./dashboard/Page";

import { useMainState } from "../hooks/useMainState";
import { useEffect } from "react";
import Demandes from "./gestion_demandes/Page";

function App() {
  const { setScreenSize, setLargeScreen } = useMainState();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
      if (window.innerWidth < 768) setLargeScreen(false);
      else setLargeScreen(true);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/demandes/*" element={<Demandes />} />
          <Route path="/messagerie" element={<div>Messagerie</div>} />
          <Route path="/rendez-vous" element={<div>Rendez-vous</div>} />
          <Route path="/statistiques" element={<div>Statistiques</div>} />
          <Route path="/parametres" element={<div>Paramètres</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
