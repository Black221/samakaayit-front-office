import { Outlet } from "react-router-dom";
import StatusTabs from "../../components/StatusTabs";
import ServiceSelection from "../../components/ServiceSelection";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <StatusTabs />

      <div className="flex flex-1">
        <ServiceSelection />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
