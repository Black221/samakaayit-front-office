import { useParams } from "react-router-dom";
import ListDemande from "../../components/demandes/ListDemande";
// import useFetchAllRequests from "../../hooks/useFetchAllResquests";
import { useMainState } from "../../hooks/useMainState";
import emptyfolder from "../../assets/empty-folder.svg";
import useFetchAllRequests from "../../hooks/useFetchAllResquests";
import { BASE_URL } from "../../constants";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Skeleton = () => {
  return (
    <div className="rounded-lg w-full">
      <div className="animate-pulse h-10 w-full rounded-lg">
        <div className="bg-neutral-50 h-full w-full rounded-lg flex items-center">
          <div className="flex items-center justify-between gap-4 w-full px-2">
            <div className="bg-neutral-200 h-5 w-5 rounded-lg"></div>
            <div className="bg-neutral-50 w-1/3 rounded-lg mr-auto">
              <div className="bg-neutral-200 h-2 rounded-lg mb-2"></div>
              <div className="bg-neutral-200 h-1 w-full rounded-lg"></div>
            </div>
            <div className="bg-neutral-200 h-4 w-20 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function List() {
  const { activeStatus } = useMainState();
  const { serviceID } = useParams();
  const user = useLocalStorage("user");
  const fonctionnaireID = user?._id;
  const institutionID = user?.institution._id;

  let url = "";
  serviceID !== undefined
    ? (url =
        BASE_URL +
        "/requests/service/" +
        serviceID +
        "/fonctionnaire/" +
        fonctionnaireID)
    : (url = BASE_URL + "/requests/institution/" + institutionID);

  const { isLoadingOnFetchingRequestsList, requests } =
    useFetchAllRequests(url);

  if (isLoadingOnFetchingRequestsList)
    return (
      <div className="h-full min-h-[300px] flex-col gap-y-4 w-full flex">
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} />
          ))}
      </div>
    );

  return (
    <div className="flex flex-col justify-between h-full w-full">
      {!requests || requests.length === 0 ? (
        <div className="flex flex-col items-center w-full h-full">
          <img
            src={emptyfolder}
            alt="empty folder"
            className="w-16 h-16 mt-32 text-gray-200"
          />
          <p className="text-center text-gray-800 text-xl">
            Aucune demande à afficher
          </p>
        </div>
      ) : (
        <>
          <ListDemande
            status={activeStatus ? activeStatus : ""}
            demandes={requests}
          />
          {/* <div className="flex justify-end items-center">
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
          </div> */}
        </>
      )}
    </div>
  );
}
