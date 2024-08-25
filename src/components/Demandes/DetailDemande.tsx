interface DetailDemandeProps {
  prenom: string;
  nom: string;
  sexe: string;
  date_de_naissance: string;
  nationalite: string;
  pays_de_naissance: string;
  lieu_de_naissance: string;
  situation_matrimoniale: string;
  numero_dossier: string;
  date_de_depot: string;
  status: string;
  pieces: string[];
}

const DetailDemandeItem = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <p className="font-semibold">{title}</p>
      <p className="text-nowrap">{value}</p>
    </div>
  );
};

const ListPieces = ({ pieces }: { pieces: string[] }) => {
  return (
    <div className="flex flex-col gap-y-1 mb-4">
      <p className="font-semibold mb-1">Liste des pièces</p>
      <ul>
        {pieces.map((piece, index) => (
          <li key={index} className="list-none mb-2">{index + 1}. {piece}</li>
        ))}
      </ul>
    </div>
  );
};




const DetailDemande = ({
  prenom,
  nom,
  sexe,
  date_de_naissance,
  nationalite,
  pays_de_naissance,
  lieu_de_naissance,
  situation_matrimoniale,
  numero_dossier,
  date_de_depot,
  pieces,
  status
}: DetailDemandeProps) => {
  return (
    <div className="font-jakarta w-[659px]">
      <div className='flex justify-between items-start'>
        <div>
          <h1 className="font-semibold text-ns mb-2">{`${prenom} ${nom}`}</h1>
          <p className="mb-[46px]">N° de dossier : {numero_dossier}</p>
        </div>

        {status === 'En attente' &&
          <div className="flex items-center gap-x-[10px]">
            <button className='bg-primary-700 text-white p-2 rounded-lg font-bold'>Confirmer la demande</button>
            <button className='text-[#E90F0F] font-bold p-2 outline-none border-none underline'>Rejeter la demande</button>
          </div>
        }
        {status === 'Confirmé' && 
          <div className="flex items-center gap-x-[10px]">
            <p className='font-bold'>Demande traitée</p>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600 disabled pointer-events-none"/>
          </div>
        }
        {status === 'Rejeté' && 
          <div className="flex items-center gap-x-[10px]">
            <button className='bg-[#DF7C73]  text-white p-2 rounded-lg font-bold'>Demande rejetée</button>
            <button className='font-bold p-2 outline-none border-none underline'>Voir details</button>
          </div>
        }

         {status === 'Traité' &&
          <div className="flex items-center gap-x-[10px]">
            <p className='font-bold'>Demande traitée</p>
            <div className="bg-primary-700 h-5 w-5 text-white rounded-sm flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
          </div>
        }

      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-y-6">
          <DetailDemandeItem title="Prénom" value={prenom} />
          <DetailDemandeItem title="Nom" value={nom} />
          <DetailDemandeItem title="Sexe" value={sexe} />
          <DetailDemandeItem title="Date de naissance" value={date_de_naissance} />
        </div>
        <div className="flex flex-col gap-y-6">
          <DetailDemandeItem title="Nationalité" value={nationalite} />
          <DetailDemandeItem title="Pays de naissance" value={pays_de_naissance} />
          <DetailDemandeItem title="Lieu de naissance" value={lieu_de_naissance} />
          <DetailDemandeItem title="Situation Matrimoniale" value={situation_matrimoniale} />
        </div>
        <div className="my-16">
          <DetailDemandeItem title="Date de dépôt" value={date_de_depot} />
        </div>
      </div>

      <ListPieces pieces={pieces} />

      <button className="flex items-center border-[1px] border-[#7B7C7E] rounded-2xl px-4 py-4 w-[265px] hover:bg-primary-700 hover:text-white hover:border-primary-400 transition-all active:bg-primary-900 focus:ring-primary-700/50 duration-200 ease-in-out" type="button">
        <svg className='h-6 w-6 mr-4' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 17H15M9 13H15M9 9H10M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span className='font-semibold'>Ouvrir le fichier</span>
      </button>
      
    </div>
  );
};

export default DetailDemande;
