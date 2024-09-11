import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./dashboard/Page";

import { useMainState } from "../hooks/useMainState";
import { useEffect } from "react";
import Demandes from "./gestion_demandes/Page";
import Profil from "./profil/Page";
import Messagerie from "./messagerie/Page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const { setScreenSize, setLargeScreen } = useMainState();
  const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/demandes/*" element={<Demandes />} />
          <Route path="/messagerie" element={<Messagerie />} />
          <Route path="/rendez-vous" element={<div>Rendez-vous</div>} />
          <Route path="/parametres" element={<Profil />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
