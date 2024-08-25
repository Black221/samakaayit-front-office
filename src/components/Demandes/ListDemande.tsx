import DemandeItem from './DemandeItem'

export default function ListDemande({ demandes }: any) {
  return (
      <ul className='py-6 px-4'>
        {
          demandes.map((demande: any) => (
              <li key={demande.numDossier} className="border-b-[0.3px] border-[#7B7C7E]"><DemandeItem status={demande.status} name={demande.name} numDossier={demande.numDossier} date={demande.date} /></li>
          ))
        } 
      </ul>
  )
}
