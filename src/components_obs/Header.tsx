import { FiSearch, FiBell, FiCalendar } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-transparent ">
      <h1 className="text-2xl font-semibold">Gestion des demandes</h1>
      <div className="flex items-center space-x-4">
        <FiSearch className="text-xl cursor-pointer" />
        <FiBell className="text-xl cursor-pointer" />
        <button className="flex items-center space-x-2 bg-yellow-200 text-gray-800 py-2 px-4 rounded-md">
          <FiCalendar />
          <span>Mardi 20 Août 2024</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
