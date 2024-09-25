import { NavLink, useLocation } from "react-router-dom";
import SamaKeuyitLogo from "../assets/Logo_dash-fonc.png";
import LoggedInUserImage from "../assets/userImage.png";
import dashboardIcon from "../assets/dashboard-icon-light.svg";
import dashboardIconActive from "../assets/dashboard-icon-dark.svg";
import demandeIcon from "../assets/demande-icon-light.svg";
import demandeIconActive from "../assets/demande-icon-dark.svg";
import messagerieIcon from "../assets/message-icon-light.svg";
import messagerieIconActive from "../assets/message-icon-dark.svg";
import parametreIcon from "../assets/setting-icon-light.svg";
import parametreIconActive from "../assets/setting-icon-dark.svg";
import logoutIcon from "../assets/logout-icon-light.svg";
import rvIcon from "../assets/rv-icon-light.svg";
import rvIconActive from "../assets/rv-icon-dark.svg";
import { useAuth } from "../hooks/useAuth";

const navigation = [
  {
    route: "/",
    icon: dashboardIcon,
    iconActive: dashboardIconActive,
  },
  {
    route: "/demandes",
    icon: demandeIcon,
    iconActive: demandeIconActive,
  },
  {
    route: "/messagerie",
    icon: messagerieIcon,
    iconActive: messagerieIconActive
  },
  {
    route: "/rendez-vous",
    icon: rvIcon,
    iconActive: rvIconActive
  },
  {
    route: "/parametres",
    icon: parametreIcon,
    iconActive: parametreIconActive
  },
];

const Sidebar = () => {
  const { logout } = useAuth();

  const location = useLocation();

  const isActive = (route: string) => location.pathname.includes(route) && route !== "/" 
    || location.pathname === route;

  return (
    <div className="flex flex-col h-full w-15 bg-primary-700 p-4  rounded-3xl">
      <div className="flex justify-center mb-12">
        <img src={SamaKeuyitLogo} alt="Logo" className="w-7 h-8" />
      </div>
      <nav className="flex flex-col items-center space-y-6 flex-1 ">
        {navigation.map((navigation, index) => (
          <NavLink
            key={index}
            to={navigation.route}
            className={({ isActive }) =>
              isActive
                ? "text-white bg-green-500 p-2 rounded-full relative"
                : "text-white p-2 hover:bg-green-500 rounded-full relative"
            }
          >
            {isActive(navigation.route) && <div className="text-xs absolute bg-white w-24 -left-1 h-full top-0 rounded-l-full">
              {/* <div className="w-1 h-1 bg-white rounded-full absolute -top-1 -left-1"></div> */}

            </div>}
            <img src={
              isActive(navigation.route)
                ? navigation.iconActive
                : navigation.icon
            } alt={navigation.route} className="z-1 w-8 h-8 relative" />

          </NavLink>
        ))}
      </nav>
      <div className=" flex justify-center">
        <NavLink
          onClick={logout}
          to="/connexion"
          className="text-white p-2 hover:bg-green-500 rounded-full"
        >
          <img src={logoutIcon} alt="logout icon" />
        </NavLink>
      </div>
      <div className=" flex justify-center">
        <NavLink to="/profil" className="text-white p-2 hover:bg-green-500 rounded-full">
          <img
            src={LoggedInUserImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-transparent"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
