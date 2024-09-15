import { FiSearch, FiBell } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import calendarImage from "../assets/calendar-icon.png";
import { getDateinFrench } from "../utils";

const Header = () => {
  const location = useLocation();

  const HeaderTitle = () => {
    let title = "";
    switch (true) {
      case location.pathname === "/":
        title = "Tableau de bord";
        break;
      case location.pathname.startsWith("/demandes"):
        title = "Gestion des demandes";
        break;
      case location.pathname === "/messagerie":
        title = "Messagerie";
        break;
      case location.pathname === "/rendez-vous":
        title = "Rendez-vous";
        break;
      case location.pathname === "/parametres":
        title = "Paramètres";
        break;
    }
    return title;
  };

  return (
    <header className="flex justify-between items-center px-4 bg-transparent ">
      <h1 className="text-subheading font-semibold font-jakarta">
        {HeaderTitle()}
      </h1>
      <div className="flex items-center space-x-4">
        <FiSearch className="text-ss cursor-pointer" />
        <FiBell className="text-ss cursor-pointer" />
        <button className="flex items-center space-x-2 bg-tertiary-200 text-gray-800 py-2 px-4 rounded-md">
          <img
            src={calendarImage}
            alt="calendrier-image"
            width={15}
            height={15}
          />
          <span className="text-ss font-body font-medium">
            {getDateinFrench(new Date())}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
