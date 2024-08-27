import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import CertificatMariage from "./certificat_de_mariage/Page";
import CertificatNaissance from "./certificat_de_naissance/Page";
import CertificatDeces from "./certificat_de_deces/Page";

function Demandes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/*" element={<CertificatMariage />} />
        <Route path="Certificat-de-mariage/*" element={<CertificatMariage />} />
        <Route path="Certificat-de-naissance/*" element={<CertificatNaissance />} />
        <Route path="Certificat-de-deces/*" element={<CertificatDeces />} />
      </Route>
    </Routes>
  );
}

export default Demandes;
