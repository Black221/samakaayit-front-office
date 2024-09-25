import { Outlet } from "react-router-dom";
import StatusTabs from "@/components/StatusTabs";
import ServiceSelection from "@/components/ServiceSelection";

const Layout = () => {
  return (
    <div className="flex flex-col h-full overflow-visible">
      <StatusTabs />
      <div className="flex flex-1 pb-1">
        <ServiceSelection />
        <div className="flex-1 px-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
