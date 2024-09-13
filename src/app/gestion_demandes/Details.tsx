import DetailDemande from "../../components/demandes/DetailDemande"
import {useNavigate} from "react-router-dom";

const details = {
    "prenom": "Aminata",
    "nom": "Ndiaye",
    "sexe": "Masculin",
    "date_de_naissance": "12/12/1990",
    "nationalite": "Sénégalaise",
    "pays_de_naissance": "Sénégal",
    "lieu_de_naissance": "Zac mbao, cité des forces françaises du cap vert",
    "situation_matrimoniale": "Marié(e)",
    "numero_dossier": "#090890",
    "date_de_depot": "12/12/1990",
    "piece": ["Carte d'identité", "Carte de sécurité", "Passeport", "Permis de conduire"],
    // "status": "Traité"
    // "status":"Rejeté"
    // "status":"Confirmé"
  "status":"En attente"
}



export default function Details() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Go back to the list of demands */}
      <button
        className="h-8 px-4 mb-4 text-sm text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
        type="button"
        onClick={() => {navigate(-1);}}
      >
        Retour
      </button>

      {/* Display the details of the demand */}
      <DetailDemande
        prenom={details.prenom}
        nom={details.nom}
        sexe={details.sexe}
        date_de_naissance={details.date_de_naissance}
        nationalite={details.nationalite}
        pays_de_naissance={details.pays_de_naissance}
        lieu_de_naissance={details.lieu_de_naissance}
        situation_matrimoniale={details.situation_matrimoniale}
        numero_dossier={details.numero_dossier}
        date_de_depot={details.date_de_depot}
        pieces={details.piece}
        status={details.status}/>
    </div>
  )
}
