import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ListeDemande from "./liste_demandes/Page";
import DetailsDemande from "./details_demandes/Page";

function Demandes() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ListeDemande />} />
          <Route path="/detailsDemande" element={<DetailsDemande />} />
        </Route>
      </Routes>
    </>
  );
}

export default Demandes;
