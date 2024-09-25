import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faPhone, faBirthdayCake, faBriefcase, faHome, faUser, faCalendarCheck, faHourglass, faDownload, faFlag } from '@fortawesome/free-solid-svg-icons';

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getRequest = async (id:any) => {
    const response = await axios.get(`${BASE_URL}/requests/${id}`);
    return response.data.data;
  };

  const { data: request, isLoading } = useQuery({
    queryKey: ["request", id],
    queryFn: () => getRequest(id),
  });

  if (isLoading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
    );

  return (
    <div className="py-6">
      <button
        className="h-8 px-4 mb-4 text-lg font-semibold text-white transition-colors duration-150 bg-primary-700 rounded-lg focus:shadow-outline hover:bg-primary-600"
        type="button"
        onClick={() => navigate(-1)}
      >
        Retour
      </button>

      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2 text-primary-700">{request.citoyen.name} {request.citoyen.surname}</h3>
          <p className="text-xl text-gray-600"><span className="font-bold">Numéro de dossier :</span> #{id}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Informations du citoyen */}
          <div className="border-r pr-4">
            {/* <h3 className="text-lg font-semibold mb-3">Informations du citoyen</h3> */}
            <div className="space-y-2">
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <strong>Nom complet :</strong>
                </p>
                <span>{request.citoyen.name} {request.citoyen.surname}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faIdCard} className="mr-2" />
                  <strong>CNI :</strong>
                </p>
                <span>{request.citoyen.CNI}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  <strong>Téléphone :</strong>
                </p>
                <span>{request.citoyen.phoneNumber}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faBirthdayCake} className="mr-2" />
                  <strong>Date de naissance :</strong>
                </p>
                <span>{new Date(request.citoyen.birthday).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faFlag} className="mr-2" />
                  <strong>Pay de Naissance :</strong>
                </p>
                <span>{request.citoyen.country ?? "Sénégal"}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                  <strong>Profession :</strong>
                </p>
                <span>{request.citoyen.job}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  <strong>Adresse :</strong>
                </p>
                <span>{request.citoyen.address}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <strong>Statut marital :</strong>
                </p>
                <span>{request.citoyen.maritalStatus}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <strong>Nom du père :</strong>
                </p>
                <span>{request.citoyen.fathersName} {request.citoyen.fathersSurname}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faUser} className="mr-2" />
                  <strong>Nom de la mère :</strong>
                </p>
                <span>{request.citoyen.mothersName} {request.citoyen.mothersSurname}</span>
              </div>
            </div>
          </div>


          {/* Détails de la demande */}
          <div>
            {/* <h3 className="text-lg font-semibold mb-4">Détails de la demande</h3> */}
            <div className="space-y-2">
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
                  <strong>Date de dépot :</strong>
                </p>
                <span>{new Date(request.createdAt).toLocaleString()}</span>
              </div>
              <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faHourglass} className="mr-2" />
                  <strong>État :</strong>
                </p>
                {
                  request.state === "en-cours" && (
                    <span className="text-primary-700 font-semibold">En cours</span>
                  )
                }
                {
                  request.state === "confirmé" && (
                    <span className="text-primary-700 font-semibold">Confirmé</span>
                  )
                }
                {
                  request.state === "rejeté" && (
                    <span className="text-primary-700 font-semibold">Rejeté</span>
                  )
                }
                {
                  request.state === "terminé" && (
                    <span className="text-primary-700 font-semibold">Terminé</span>
                  )
                }
              </div>
              {/* <div className="flex items-center mb-2">
                <p className="w-48">
                  <FontAwesomeIcon icon={faFile} className="mr-2" />
                  <strong>Copie de la carte d'identité :</strong>
                </p>
                <a href={`${BASE_URL}/documents/file/${request.documentResponses?.["Copie de la Carte d'Identité"]}`}
                  target="_blank"
                  className="flex items-center"
                >
                  <span>{request.documentResponses?.["Copie de la Carte d'Identité"]}</span>
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2" />
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <hr className="my-8 h-[1px] bg-black" />

        <div className="my-4 rounded-lg overflow-hidden flex items-center gap-10">
          <a
            href={`${BASE_URL}/documents/file/${request.documentResponses?.["Copie de la Carte d'Identité"]}`}
            target="_blank"
            className="inline-block font-bold px-4 py-2 text-white bg-primary-700 rounded-lg hover:bg-primary-600 transition-colors duration-150 ease-in-out">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            <span>Télécharger le fichier</span>
          </a>

          {request?.state === "en-cours" && (
          <div className="flex items-center gap-x-[10px]">
            <button className="bg-primary-700 hover:bg-primary-600 transition-colors duration-150 ease-in-out text-white p-2 rounded-lg font-bold">
              Confirmer la demande
            </button>
            <button className="text-[#E90F0F] border border-[#E90F0F] hover:bg-[#E90F0F] hover:text-white font-bold p-2 outline-none rounded-lg transition-colors duration-150 ease-in-out">
              Rejeter la demande
            </button>
          </div>
          )}

          {/* {request?.state === "confirmé" && (
            <div className="flex items-center gap-x-[10px]">
              <p className="font-bold">Demande traitée</p>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-gray-600 disabled pointer-events-none"
              />
            </div>
          )} */}

          {request?.state === "rejeté" && (
            <button className="font-bold p-2 outline-none border-none underline">
              Voir details
            </button>
          )}

          {/* {request?.state === "terminé" && (
            <div className="flex items-center gap-x-[10px]">
              <p className="font-bold">Demande traitée</p>
              <div className="bg-primary-700 h-5 w-5 text-white rounded-sm flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}
