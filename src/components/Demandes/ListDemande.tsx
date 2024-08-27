import DemandeItem from './DemandeItem'

export default function ListDemande({ demandes, onPress } : {demandes:any, onPress:React.MouseEventHandler<HTMLButtonElement> | undefined}) {
  return (
      <ul className='py-6 px-4 w-full divide-y divide-[#7B7C7E]'>
        {
          demandes.map((demande: any) => (
              <li key={demande.numDossier} className=""><DemandeItem status={demande.status} name={demande.name} numDossier={demande.numDossier} date={demande.date} onPress={onPress} /></li>
          ))
        } 
      </ul>
  )
}
