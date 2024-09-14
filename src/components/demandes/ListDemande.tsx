import { useNavigate } from "react-router-dom";
import { Demande } from "../../types/models";
import DemandeItem from "./DemandeItem";

interface ListDemandeProps {
  demandes: Demande[];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  // status?: "en-cours" | "confirmé" | "terminé" | "rejeté";
  status?: string;
}

export default function ListDemande({
  demandes,
  onClick,
  status,
}: ListDemandeProps) {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="py-6">
        {status
          ? demandes
              ?.filter((demande) => demande.state === status)
              .map((demande) => (
                <li
                  key={demande._id}
                  className="border-b-[0.3px] border-[#7B7C7E]"
                >
                  <DemandeItem demande={demande} onClick={() => navigate(`/demandes/details/${demande._id}`)} />
                </li>
              ))
          : demandes?.map((demande) => (
              <li
                key={demande._id}
                className="border-b-[0.3px] border-[#7B7C7E]"
              >
                <DemandeItem demande={demande} onClick={() => navigate(`/demandes/details/${demande._id}`)} />
              </li>
            ))}
      </ul>
      {demandes?.length > 7 && (
        <button
          onClick={() => navigate("/demandes")}
          className="mt-4 text-sm text-primary-700 hover:underline"
        >
          Voir tout
        </button>
      )}
    </div>
  );
}
