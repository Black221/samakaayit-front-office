import { NavLink } from "react-router-dom";
import SamaKeuyitLogo from "../assets/Logo_dash-fonc.png";
import LoggedInUserImage from "../assets/userImage.png";
import dashboardIcon from "../assets/dashboard-icon-light.svg";
import demandeIcon from "../assets/demande-icon-light.svg";
import messagerieIcon from "../assets/message-icon-light.svg";
import statistiqueIcon from "../assets/statistiques-icon-light.svg";
import parametreIcon from "../assets/setting-icon-light.svg";
import logoutIcon from "../assets/logout-icon-light.svg";

const navigation = [
  {
    route: "/",
    icon: dashboardIcon,
  },
  {
    route: "/demandes",
    icon: demandeIcon,
  },
  {
    route: "/messagerie",
    icon: messagerieIcon,
  },
  {
    route: "/statistiques",
    icon: statistiqueIcon,
  },
  {
    route: "/parametres",
    icon: parametreIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-[95vh] w-15 bg-primary-700 p-4 space-y-6 rounded-3xl fixed left-4 top-1/2 transform -translate-y-1/2 shadow-lg">
      <div className="flex justify-center mb-6">
        <img src={SamaKeuyitLogo} alt="Logo" className="w-7 h-8" />
      </div>
      <nav className="flex flex-col items-center space-y-8 flex-grow">
        {navigation.map((navigation, index) => (
          <NavLink
            key={index}
            to={navigation.route}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 p-2 rounded-full"
                : "text-white p-2 hover:bg-green-500 rounded-full"
            }
          >
            <img src={navigation.icon} alt={navigation.route} />
          </NavLink>
        ))}
      </nav>
      <div className="mt-8 flex justify-center">
        <NavLink
          to="/connexion"
          className="text-white p-2 hover:bg-green-500 rounded-full"
        >
          <img src={logoutIcon} alt="logout icon" />
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
