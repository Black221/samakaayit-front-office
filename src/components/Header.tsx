import { FiSearch, FiBell, FiCalendar } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const HeaderTitle = () => {
    let title = "";
    switch (location.pathname) {
      case "/":
        title = "Tableau de bord";
        break;
      case "/demandes":
        title = "Gestion des demandes";
        break;
      case "/messagerie":
        title = "Messagerie";
        break;
      case "/statistiques":
        title = "Statistiques";
        break;
      case "/parametres":
        title = "Paramètres";
        break;
    }
    return title;
  };
  const getDateinFrench = () => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleDateString("fr-FR", options);
  };
  return (
    <header className="flex justify-between items-center p-4 bg-transparent ">
      <h1 className="text-subheading font-semibold">{HeaderTitle()}</h1>
      <div className="flex items-center space-x-4">
        <FiSearch className="text-ss cursor-pointer" />
        <FiBell className="text-ss cursor-pointer" />
        <button className="flex items-center space-x-2 bg-tertiary-200 text-gray-800 py-2 px-4 rounded-md">
          <FiCalendar />
          <span className="text-ss font-body font-medium">
            {getDateinFrench()}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
