import { useParams } from "react-router-dom";
import ListDemande from "../../components/demandes/ListDemande";
import Spinner from "../../components/Spinner";
import { BASE_URL } from "../../constants";
import useFetchAllRequests from "../../hooks/useFetchAllResquests";
import { useMainState } from "../../hooks/useMainState";
import emptyfolder from "../../assets/empty-folder.svg";
export default function List() {
  let { serviceId } = useParams();
  const { activeStatus, setActiveStatus } = useMainState();
  
  let url = `${BASE_URL}/requests`;

  if (serviceId !== undefined) {
    url = `${BASE_URL}/requests/service/${serviceId}/fonctionnaire/66e03f39c99206104c170ff9`;
  }

  if (activeStatus && serviceId) {
    switch (activeStatus) {
      case "En cours":
        url = `${BASE_URL}/requests/service/${serviceId}/fonctionnaire/66e03f39c99206104c170ff9?status=en-cours`;
        break;
      case "Confirmé":
        url = `${BASE_URL}/requests/service/${serviceId}/fonctionnaire/66e03f39c99206104c170ff9?status=confirmé`;
        break;
      case "Rejeté":
        url = `${BASE_URL}/requests/service/${serviceId}/fonctionnaire/66e03f39c99206104c170ff9?status=rejeté`;
        break;
      case "Terminé":
        url = `${BASE_URL}/requests/service/${serviceId}/fonctionnaire/66e03f39c99206104c170ff9?status=terminé`;
        break;
    }
  }


  const { isLoadingOnFetchingRequestsList, requests } = useFetchAllRequests(url);
console.log(requests);
  if (isLoadingOnFetchingRequestsList)
    return (
      <div className="h-full min-h-[300px] w-full flex justify-center items-center">
        {" "}
        <Spinner />{" "}
      </div>
    );

  return (
    <div className="flex flex-col justify-between h-full w-full">
      {
        !requests.data || requests.data.length === 0 ?
        <div className="flex flex-col items-center w-full h-full">
          <img src={emptyfolder}  alt="empty folder" className="w-16 h-16 mt-32 text-gray-200" />
          <p className="text-center text-gray-800 text-xl">
            Aucune demande à afficher
          </p>
        </div>
        :
        <>
          <ListDemande demandes={requests.data} />
          <div className="flex justify-end items-center">
            <a
              href="/demandes"
              className="flex items-center px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200"
            >
              précédent
            </a>
    
            <a
              href="/demandes"
              className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200"
            >
              1
            </a>
    
            <a
              href="/demandes"
              className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200"
            >
              2
            </a>
    
            <a
              href="/demandes"
              className="items-center hidden px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md sm:flex hover:bg-gray-200"
            >
              3
            </a>
    
            <a
              href="/demandes"
              className="flex items-center px-4 py-2 mx-1 text-gray-800 transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-200"
            >
              Suivant
            </a>
          </div>
        </>
      }
    </div>
  );
}
