import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import List from "./List";
import Details from "./Details";


function Demandes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<List />} />
        <Route path="services/:serviceId" element={<List />} />
        <Route path="details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default Demandes;
