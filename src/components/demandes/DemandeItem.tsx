import idCard from "../../assets/id-card.png";
import { Demande } from "../../types/models";
import { getDateOfTypeStringInFrench } from "../../utils";

interface DemandeItemProps {
  demande: Demande;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const STATUS_COLOR: { [key: string]: string | undefined } = {
  "en-cours": "bg-[#EAEAEA]",
  confirmé: "bg-[#DFFFEA]",
  terminé: "bg-[#FFFAC2]",
  rejeté: "bg-[#F0CBB8]",
};

const DemandeItem = ({ demande, onClick }: DemandeItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row items-center justify-between w-full py-[10px]"
    >
      <img src={idCard} alt="id-card" className="w-6 h-6 mr-[16px]" />

      <div className="flex flex-col items-start">
        <h3 className="text-sm font-semibold">
          {demande?.citoyen?.name} {demande?.citoyen?.surname}
        </h3>
        <p className="text-xs font-semibold text-[#7B7C7E]">
          Date de dépot :{" "}
          {getDateOfTypeStringInFrench(demande?.dateAndHourTreatment)}
        </p>
      </div>
      <div className="flex-1"></div>
      <span
        className={`rounded-[3px] px-3 text-black font-medium text-sm ${
          STATUS_COLOR[demande?.state]
        }`}
      >
        {demande?.state}
      </span>

      {/* ckeckbox */}
      {/* <div className="inline-flex items-center ml-2">
        <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="amber">
          <input type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-primary-500 checked:bg-primary-700"
            id="amber" />
          <span
            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
              stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>
      </div> */}
    </button>
  );
};

export default DemandeItem;
