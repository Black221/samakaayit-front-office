import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-24 mt-4">
        <Header />
        <main className="flex-1 px-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
