import DemandeItem from './DemandeItem'

export default function ListDemande({ demandes }: any) {
  return (
      <ul className='py-6 px-4 divide-y divide-[#7B7C7E] w-full'>
        {
          demandes.map((demande: any) => (
              <li key={demande.numDossier} className=""><DemandeItem status={demande.status} name={demande.name} numDossier={demande.numDossier} date={demande.date} /></li>
          ))
        } 
      </ul>
  )
}
