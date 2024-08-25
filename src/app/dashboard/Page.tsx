import Chart from "react-apexcharts";
import RVList from "../../components_obs/RVList";

const RVs = [
  {
    name: "Binta Aminata Ndoye",
    time: "08:30",
    colorClass: "bg-green-500",
  },
  {
    name: "Pathe Ndiaye",
    time: "10:00",
    colorClass: "bg-green-500",
  },
  {
    name: "Anta Bintou Ndoye",
    time: "10:00",
    colorClass: "bg-red-500",
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Colonne principale (gauche) */}
      <div className="col-span-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-3xl p-6">
            <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
              Nombre total de demande
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-medium">6300</span>
              <span className="text-secondary-500 text-sm bg-secondary-100 px-2 py-1 rounded">
                ↑ 1.2%
              </span>
            </div>

            <div className="mt-2">
              <p className="text-tertiary-1000">Demande du dernier mois</p>
              <div className="relative pt-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    250 demandes traitées
                  </span>
                  <span className="text-sm font-semibold text-tertiary-1000">
                    25%
                  </span>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                  <div
                    style={{ width: "25%" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-3xl p-6">
            <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
              Nombre total de demande par service
            </h3>
            <div>
              <div className="relative h-40 w-40 mx-auto">
                <div className="flex items-center justify-center h-full w-full rounded-full">
                  <Chart
                    options={{
                      legend: { show: false },
                      labels: [
                        "Certificat de mariage",
                        "Certificat de naissance",
                        "Certificat de décès",
                      ],
                    }}
                    series={[44, 55, 41]}
                    type="donut"
                    width="250"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deuxième rangée : Gestion des demandes */}
        <div className="bg-white shadow-md rounded-3xl p-6">
          <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
            Gestion des demandes
          </h3>
          <div>
            <p className="text-sm mb-4 text-primary-700 ">
              Total de 1250 demandes
            </p>
            <div className="space-y-4">
              {[
                {
                  name: "Aminata Sene Ndoye",
                  status: "Confirmé",
                  number: "#090890",
                  statusClass: "bg-green-100 text-green-700",
                },
                {
                  name: "Bineta Niang",
                  status: "Traité",
                  number: "#090887",
                  statusClass: "bg-yellow-100 text-yellow-700",
                },
                {
                  name: "Khalifa Mbaye",
                  status: "Rejeté",
                  number: "#090890",
                  statusClass: "bg-red-100 text-red-700",
                },
                {
                  name: "Baba Ndiaye",
                  status: "Traité",
                  number: "#090890",
                  statusClass: "bg-yellow-100 text-yellow-700",
                },
                {
                  name: "Anta Beye",
                  status: "Confirmé",
                  number: "#090890",
                  statusClass: "bg-green-100 text-green-700",
                },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-medium">{item.name}</h4>
                    <p className="text-xs text-gray-500">
                      N° de dossier: {item.number}
                    </p>
                  </div>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${item.statusClass}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Colonne secondaire (droite) */}
      <div className="col-span-4 space-y-6">
        {/* Messagerie */}
        <div className="bg-white shadow-md rounded-3xl p-6">
          <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
            Messagerie
          </h3>
          <div className="space-y-4">
            {[
              {
                name: "Lt Abdoulaye Diallo",
                message:
                  "Bonsoir, il nous faut une synthèse des dernières demandes au ...",
              },
              {
                name: "Lt Abdoulaye Diallo",
                message:
                  "Bonsoir, il nous faut une synthèse des dernières demandes au ...",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="rounded-full bg-gray-300 h-12 w-12"></div>
                <div className="ml-4">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rendez-vous */}
        <div className="bg-white shadow-md rounded-3xl p-6">
          <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
            Rendez-vous
          </h3>
          <div className="space-y-4">
            <RVList RVs={RVs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
