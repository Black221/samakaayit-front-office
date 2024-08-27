import { useLocation, useNavigate} from "react-router-dom";
import ListDemande from "../../../../components/Demandes/ListDemande";

const demandes = [
  {
    "name": "John Doe",
    "numDossier": "123456",
    "date": "22/08/2024",
    "status": "Traité"
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


export default function List() {

  const location = useLocation();
  const navigate = useNavigate();
  const id = 1;

  function onPress(): void {
    navigate(`${location.pathname}/details/${id}`);
  }

  return (
    <div className="flex flex-col justify-between min-h-[500px] w-full">
      <ListDemande demandes={demandes} onPress={onPress} />

      {/* pagination */}
      <div className="flex justify-end items-center">
        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200">
            précédent
        </a>

        <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200">
            1
        </a>

        <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200">
            2
        </a>

        <a href="#" className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200">
            3
        </a>

        <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200">
            Suivant
        </a>
      </div>
    </div>
  )
}
