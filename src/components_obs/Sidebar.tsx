import {
  FiGrid,
  FiFileText,
  FiMessageSquare,
  FiBarChart2,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import SamaKeuyitLogo from "../assets/Logo_dash-fonc.png";
import LoggedInUserImage from "../assets/userImage.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-[95vh] w-15 bg-green-600 p-4 space-y-6 rounded-3xl fixed left-4 top-1/2 transform -translate-y-1/2 shadow-lg">
      <div className="flex justify-center mb-6">
        <img src={SamaKeuyitLogo} alt="Logo" className="w-7 h-7" />
      </div>
      <nav className="flex flex-col items-center space-y-8 flex-grow">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-500 p-2 rounded-full"
              : "text-white p-2 hover:bg-green-500 rounded-full"
          }
        >
          <FiGrid className="text-2xl" />
        </NavLink>

        <NavLink
          to="/demandes"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-500 p-2 rounded-full"
              : "text-white p-2 hover:bg-green-500 rounded-full"
          }
        >
          <FiFileText className="text-2xl" />
        </NavLink>

        <NavLink
          to="/messagerie"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-500 p-2 rounded-full"
              : "text-white p-2 hover:bg-green-500 rounded-full"
          }
        >
          <FiMessageSquare className="text-2xl" />
        </NavLink>

        <NavLink
          to="/statistiques"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-500 p-2 rounded-full"
              : "text-white p-2 hover:bg-green-500 rounded-full"
          }
        >
          <FiBarChart2 className="text-2xl" />
        </NavLink>

        <NavLink
          to="/parametres"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-green-500 p-2 rounded-full"
              : "text-white p-2 hover:bg-green-500 rounded-full"
          }
        >
          <FiSettings className="text-2xl" />
        </NavLink>
      </nav>
      <div className="mt-8 flex justify-center">
        <NavLink
          to="/connexion"
          className="text-white p-2 hover:bg-green-500 rounded-full"
        >
          <FiLogOut className="text-2xl" />
        </NavLink>
      </div>
      <div className="mt-auto flex justify-center">
        <img
          src={LoggedInUserImage}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-transparent"
        />
      </div>
    </div>
  );
};

export default Sidebar;
