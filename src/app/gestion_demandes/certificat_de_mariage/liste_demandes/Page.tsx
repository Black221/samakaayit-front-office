import { useLocation, useNavigate} from "react-router-dom";
import ListDemande from "../../../../components/demandes/ListDemande";
import { DemandeModel } from "../../../../types/models";


export default function List() {

  const location = useLocation();
  const navigate = useNavigate();
  const id = 1;

  function onBackPress(): void {
    navigate(`${location.pathname}/details/${id}`);
  }

  const demandes: DemandeModel[] = [
  {
    "name": "John Doe",
    "numDossier": "123456",
    "date": "22/08/2024",
    "status": "Traité",
    
  },
  {
    "name": "Jane Smith",
    "numDossier": "789101",
    "date": "15/07/2024",
    "status": "Confirmé"
  },
  {
    "name": "Alice Johnson",
    "numDossier": "112131",
    "date": "10/08/2024",
    "status": "En attente"
  }
];

  return (
    <div className="flex flex-col justify-between min-h-[500px] w-full">
      <ListDemande demandes={demandes} onClick={onBackPress}/>

      {/* pagination */}
      <div className="flex justify-end items-center">
        <a href="/demandes" className="flex items-center px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200">
            précédent
        </a>

        <a href="/demandes" className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200">
            1
        </a>

        <a href="/demandes" className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200">
            2
        </a>

        <a href="/demandes" className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200">
            3
        </a>

        <a href="/demandes" className="flex items-center px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200">
            Suivant
        </a>
      </div>
    </div>
  )
}
