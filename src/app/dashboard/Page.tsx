// import Chart from "react-apexcharts";
import RVList from "../../components/rendez_vous/RVList";
import ListDemande from "../../components/demandes/ListDemande";
import MessageList from "../../components/messagerie/MessageList";
import LoggedInUserImage from "../../assets/userImage.png";
import { Demande } from "../../types/models";
import useFetchAllRequests from "../../hooks/useFetchAllResquests";
import { BASE_URL } from "../../constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Messages = [
  {
    imageURL: LoggedInUserImage,
    title: "Abdoulaye Diallo",
    message: "War na meune gueneu gaw deh si yone",
  },
  {
    imageURL: LoggedInUserImage,
    title: "Pape Demba Aw",
    message: "Danga wara gueneu dioublou si mbir mi",
  },
  {
    imageURL: LoggedInUserImage,
    title: "Abdoulaye Diallo",
    message: "War na meune gueneu gaw deh si yone",
  },
  {
    imageURL: LoggedInUserImage,
    title: "Abdoulaye Diallo",
    message: "War na meune gueneu gaw deh si yone",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const url = `${BASE_URL}/requests`;

  const getRendezVous = async () => {
    const response = await axios.get(`${BASE_URL}/rendezvous`);
    return response.data.data;
  };

  const getRequestsByService = async () => {
    const response = await axios.get(
      `${BASE_URL}/requests/institution/66e03f39c99206104c170ff9/request-count`
    );
    return response.data.data;
  };

  const { requests } =
    useFetchAllRequests(url);
  const { data: rendezVous } =
    useQuery({
      queryKey: ["RendezVous"],
      queryFn: getRendezVous,
    });

  const {
    data: requestsByService,
  } = useQuery({
    queryKey: ["requestsByService"],
    queryFn: getRequestsByService,
  });

  const numberOfRequestProcessed = requests?.filter(
    (demande: Demande) => demande.state === "terminé"
  ).length;
  const percentageOfRequestProcessed =
    (requests?.filter((demande: Demande) => demande.state === "terminé")
      .length /
      requests?.length) *
    100;
  console.log(requestsByService);
  return (
    <div className="grid grid-cols-12 gap-6 pb-12">
      {/* Colonne principale (gauche) */}
      <div className="col-span-8 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white shadow-md rounded-3xl p-6">
            <h3 className="text-ss font-semibold mb-4 text-tertiary-1000 ">
              Nombre total de demandes
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-ns font-medium">
                {requests?.length}
              </span>
              <span className="text-secondary-500 text-sm bg-secondary-100 px-2 py-1 rounded">
                ↑ 1.2%
              </span>
            </div>

            <div className="mt-2">
              <p className="text-tertiary-1000">Demandes du dernier mois</p>
              <div className="relative pt-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">
                    {numberOfRequestProcessed} demande(s) traitée(s)
                  </span>
                  <span className="text-sm font-semibold text-tertiary-1000">
                    {percentageOfRequestProcessed}%
                  </span>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-xl bg-primary-100">
                  <div
                    style={{ width: `${percentageOfRequestProcessed}%` }}
                    className="shadow-none flex flex-col rounded-xl text-center whitespace-nowrap text-white justify-center bg-primary-700"
                  ></div>
                </div>
              </div>
            </div>
          </div>
{/* 
          <div className="bg-white shadow-md rounded-3xl p-6">
            <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
              Nombre total de demandes par service
            </h3>
            <div>
              <div className="relative h-40 w-40 mx-auto">
                <div className="flex items-center justify-center h-full w-full rounded-full">
                  <Chart
                    options={{
                      legend: { show: false },
                      labels: requestsByService?.services?.map(
                        (service: {
                          serviceId: string;
                          serviceName: string;
                          requestCount: number;
                        }) => service.serviceName
                      ),
                    }}
                    series={requestsByService?.services?.map(
                      (service: {
                        serviceId: string;
                        serviceName: string;
                        requestCount: number;
                      }) => service.requestCount
                    )}
                    type="donut"
                    width="250"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Deuxième rangée : Gestion des demandes */}
        <div className="bg-white shadow-md rounded-3xl p-6">
          <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
            Gestion des demandes
          </h3>
          <div>
            <p className="text-sm mb-4 text-primary-700 ">
              Total de {requests?.length} demandes
            </p>
            <div className="space-y-4">
              <ListDemande demandes={requests} itemCount={3} />
              {requests.length > 3 && (
                <button
                  onClick={() => navigate("/demandes")}
                  className="mt-4 text-sm text-primary-700 hover:underline"
                >
                  Voir tout
                </button>
              )}
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
          <div>
            <MessageList messages={Messages} />
          </div>
        </div>

        {/* Rendez-vous */}
        <div className="bg-white shadow-md rounded-3xl p-6">
          <h3 className="text-ss font-semibold mb-4 text-tertiary-1000">
            Rendez-vous
          </h3>
          <div className="space-y-4">
            {rendezVous && <RVList RVs={rendezVous} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
