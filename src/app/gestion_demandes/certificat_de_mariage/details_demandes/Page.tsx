import DetailDemande from "../../../../components/Demandes/DetailDemande"

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


  return (
    <div>
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
