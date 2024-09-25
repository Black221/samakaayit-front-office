import { NavLink } from "react-router-dom";
import SamaKeuyitLogo from "../assets/Logo_dash-fonc.png";
import LoggedInUserImage from "../assets/userImage.png";
import dashboardIcon from "../assets/dashboard-icon-light.svg";
import demandeIcon from "../assets/demande-icon-light.svg";
import messagerieIcon from "../assets/message-icon-light.svg";
import parametreIcon from "../assets/setting-icon-light.svg";
import logoutIcon from "../assets/logout-icon-light.svg";
import rvIcon from "../assets/rv-icon-light.svg";
import { useAuth } from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
  // {
  //   route: "/rendez-vous",
  //   icon: rvIcon,
  // },
  {
    route: "/parametres",
    icon: parametreIcon,
  },
];

const Sidebar = () => {
  const { logout } = useAuth();

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
      <div className="mt-auto flex flex-col justify-center items-center">
        <NavLink
          onClick={logout}
          to="/connexion"
          className="text-white p-2 hover:bg-green-500 rounded-full mb-2"
        >
          <img src={logoutIcon} alt="logout icon" />
        </NavLink>

        <NavLink
          to="/profil"
          className="text-white p-2 bg-green-500 hover:bg-green-500 rounded-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>

        </NavLink>
      </div>
      {/* <div className="mt-auto flex justify-center">
        <img
          src={LoggedInUserImage}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-transparent"
        />
      </div> */}
    </div>
  );
};

export default Sidebar;
