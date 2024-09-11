import { useLocation, useNavigate } from "react-router-dom";
import ListDemande from "../../../../components/demandes/ListDemande";
import Spinner from "../../../../components/Spinner";
import useFetchAllRequests from "../../../../hooks/useFetchAllResquests";

export default function List() {
  const location = useLocation();
  const navigate = useNavigate();
  const id = 1;

  function onBackPress(): void {
    navigate(`${location.pathname}/details/${id}`);
  }

  const { isLoadingOnFetchingRequestsList, requests } = useFetchAllRequests();

  if (isLoadingOnFetchingRequestsList)
    return (
      <div className="h-full min-h-[300px] w-full flex justify-center items-center">
        {" "}
        <Spinner />{" "}
      </div>
    );

  return (
    <div className="flex flex-col justify-between min-h-[500px] w-full">
      <ListDemande demandes={requests.data} onClick={onBackPress} />

      {/* pagination */}
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
    </div>
  );
}
