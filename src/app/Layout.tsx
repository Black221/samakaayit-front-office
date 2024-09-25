import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex h-screen py-6 bg-white overflow-hidden">
      <div className="px-6 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col pt-6 h-full ">
        <Header />
        <main className="flex-1 px-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
