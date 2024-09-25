import { useMainState } from "../hooks/useMainState";

const StatusTabs = () => {
  const tabs: any = [
    {
      label: "En cours",
      value: "en-cours",
    },
    {
      label: "Rejeté",
      value: "rejeté",
    },
    {
      label: "Terminé",
      value: "terminé",
    },
    {
      label: "Confirmé",
      value: "confirmé",
    },
  ];

  const { activeStatus, setActiveStatus } = useMainState();

  return (<>
  <div className="flex justify-between items-center mb-2">
    Total de 1250 demandes.
  </div>
    <div className="flex space-x-8  mb-6">
      {tabs.map((tab: any, index: number) => (
        <button
          key={index}
          onClick={() => {
            setActiveStatus(tab.value);
            // filterByStatus(tab.value);
          }}
          className={`${
            activeStatus === tab.value
              ? "text-primary-700 border-b-2 pb-0 border-primary-700 font-body"
              : "text-tertiary-1000 border-b-2 pb-0 border-transparent hover:text-primary-700 font-body"
          } py-2 `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </>);
};

export default StatusTabs;
