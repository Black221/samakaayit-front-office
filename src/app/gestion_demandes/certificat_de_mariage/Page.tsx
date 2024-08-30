import { Route, Routes } from "react-router-dom";
import List from "./liste_demandes/Page";
import Details from "./details_demandes/Page";

export default function CertificatMariage() {
  return (
   <div>
      <Routes>
        <Route path="/*" element={ <List/> } />
        <Route path="details/:id" element={ <Details/>} />
      </Routes>
   </div>
  );
}

