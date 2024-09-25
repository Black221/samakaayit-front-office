import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Details from "./Details";
import List from "./List";


function Demandes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<List />} />
        <Route path="services/:serviceID" element={<List />} />
      </Route>
      <Route path="details/:id" element={<Details />} />
    </Routes>
  );
}

export default Demandes;
