import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Details from "./Details";
import List from "./List";
import Details_v2 from "./Details_v2";


function Demandes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<List />} />
        <Route path="/services/:serviceID" element={<List />} />
        <Route path="/details/:id" element={<Details_v2 />} />

      </Route>

      <Route path="details/:id" element={<Details />} />
    </Routes>
  );
}

export default Demandes;
