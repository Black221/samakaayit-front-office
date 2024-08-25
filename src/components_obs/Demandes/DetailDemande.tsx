import document from '../../assets/document.png';

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
  pieces
}: DetailDemandeProps) => {
  return (
    <div className="w-[627px] font-jakarta">
      <h1 className="font-semibold text-ns mb-2">{`${prenom} ${nom}`}</h1>
      <p className="mb-[46px]">N° de dossier : {numero_dossier}</p>
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
        <img className='h-6 w-6 mr-4' src={document} alt="document" />
        <span className='font-semibold'>Ouvrir le fichier</span>
      </button>
      
    </div>
  );
};

export default DetailDemande;
