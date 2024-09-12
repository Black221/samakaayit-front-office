import { useNavigate } from "react-router-dom";
import { DemandeModel } from "../../types/models";
import DemandeItem from "./DemandeItem";

interface ListDemandeProps {
  demandes: DemandeModel[];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;

  status?: "En attente" | "Confirmé" | "Traité" | "Rejeté" | "Cas complexes";

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
              .filter((demande) => demande.status === status)
              .map((demande) => (
                <li
                  key={demande.numDossier}
                  className="border-b-[0.3px] border-[#7B7C7E]"
                >
                  <DemandeItem demande={demande} onClick={onClick} />
                </li>
              ))
          : demandes.map((demande) => (
              <li
                key={demande.numDossier}
                className="border-b-[0.3px] border-[#7B7C7E]"
              >
                <DemandeItem demande={demande} onClick={onClick} />
              </li>
            ))}
      </ul>
      {demandes.length > 7 && (
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
