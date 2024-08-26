import { useMainState } from "../hooks/useMainState";

const StatusTabs = () => {
  const tabs = [
    "En attente",
    "Confirmées",
    "Traitées",
    "Rejetées",
    "Cas complexes",
  ];
  const { activeStatus, setActiveStatus } = useMainState();

  return (
    <div className="flex space-x-8  mb-6">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveStatus(tab)}
          className={`${
            activeStatus === tab
              ? "text-primary-700 border-b-2 border-primary-700 font-body"
              : "text-tertiary-1000 hover:text-primary-700 font-body"
          } py-2 px-4 font-semibold`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default StatusTabs;
