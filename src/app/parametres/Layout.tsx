import { faBell, faLock, faMessage, faShield, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {

  const navigate = useNavigate();
  
  return (
    <div className="flex min-h-[calc(100vh-130px)]">
        <div className="bg-white p-4 rounded-xl shadow-md w-68 min-h-[calc(100vh-130px)]">
          <ul className="flex flex-col gap-2 min-h-[calc(100vh-130px)]">
            <li className="flex items-center gap-x-2 bg-primary-100 rounded-md px-3 py-2 cursor-pointer" onClick={() => navigate("/parametres/notifications")}>
              <FontAwesomeIcon icon={faBell} className="mr-2" />
              <span className="font-semibold">Notifications</span>
            </li>

            <li className="flex items-center gap-x-2 rounded-md px-3 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              <span className="font-semibold">Préférences</span>
            </li>

            <li className="flex items-center gap-x-2 rounded-md px-3 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faShield} className="mr-2" />
              <span className="font-semibold">Confidentialité</span>
            </li>

            <li className="flex items-center gap-x-2 rounded-md px-3 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              <span className="font-semibold">Securité</span>
            </li>

            <li className="flex items-center gap-x-2 rounded-md px-3 py-2 cursor-pointer">
              <FontAwesomeIcon icon={faMessage} className="mr-2" />
              <span className="font-semibold">Support et Assistance</span>
            </li>
          </ul>
        </div>

        <main className="flex-1 px-4 h-full">
          <Outlet />
        </main>
      </div>
  );
};

export default Layout;