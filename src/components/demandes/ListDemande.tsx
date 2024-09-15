import { useNavigate } from "react-router-dom";
import { Demande } from "../../types/models";
import emptyfolder from "../../assets/empty-folder.svg";
import DemandeItem from "./DemandeItem";

interface ListDemandeProps {
  demandes: Demande[];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  // status?: "en-cours" | "confirmé" | "terminé" | "rejeté";
  status?: string;
}

export default function ListDemande({
  demandes,
  status,
}: ListDemandeProps) {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="py-6">
        {status ? (
          demandes?.filter((demande) => demande.state === status).length > 0 ? (
            demandes
              ?.filter((demande) => demande.state === status)
              .map((demande) => (
                <li
                  key={demande._id}
                  className="border-b-[0.3px] border-[#7B7C7E]"
                >
                  <DemandeItem
                    demande={demande}
                    onClick={() => navigate(`/demandes/details/${demande._id}`)}
                  />
                </li>
              ))
          ) : (
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
          )
        ) : (
          demandes?.map((demande) => (
            <li key={demande._id} className="border-b-[0.3px] border-[#7B7C7E]">
              <DemandeItem
                demande={demande}
                onClick={() => navigate(`/demandes/details/${demande._id}`)}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
