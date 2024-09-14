import Chart from "react-apexcharts";
import RVList from "../../components/rendez_vous/RVList";
import ListDemande from "../../components/demandes/ListDemande";
import MessageList from "../../components/messagerie/MessageList";
import LoggedInUserImage from "../../assets/userImage.png";
import { Demande } from "../../types/models";
import Spinner from "../../components/Spinner";
import useFetchAllRequests from "../../hooks/useFetchAllResquests";
import { BASE_URL } from "../../constants";

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
  const { isLoadingOnFetchingRequestsList, requests } = useFetchAllRequests(
    `${BASE_URL}/requests`
  );

  // const getAllRendezVous = async () => {
  //   const response = await axios.get(`${BASE_URL}/rendezvous`)
  //   return response.data
  // }
  // const { data: rendezvous, isLoadingOnFetchingRendezVous } = useQuery({
  //   queryKey: [],
  //   queryFn: getAllRendezVous,
  // })

  const numberOfRequestProcessed = requests.data?.filter(
    (demande: Demande) => demande.state === "terminé"
  ).length;
  const percentageOfRequestProcessed =
    (requests.data?.filter((demande: Demande) => demande.state === "terminé")
      .length /
      requests.data?.length) *
    100;
  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Colonne principale (gauche) */}
      <div className="col-span-8 space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-3xl p-6">
            <h3 className="text-ss font-semibold mb-4 text-tertiary-1000 ">
              Nombre total de demandes
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-ns font-medium">
                {isLoadingOnFetchingRequestsList ? (
                  <span className="h-full min-h-[300px] w-full flex justify-center items-center">
                    {" "}
                    <Spinner />{" "}
                  </span>
                ) : (
                  requests.data?.length
                )}
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
              Total de {requests.data?.length} demandes
            </p>
            <div className="space-y-4">
              <ListDemande demandes={requests.data} />
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
            <RVList RVs={RVs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
