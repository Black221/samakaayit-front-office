import { useQuery } from "@tanstack/react-query";
import DetailDemande from "../../components/demandes/DetailDemande";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants";
import Spinner from "../../components/Spinner";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getRequest = async (id: string | undefined) => {
    const response = await axios.get(`${BASE_URL}/requests/${id}`);
    return response.data.data;
  };

  const { data: request, isLoading: isLoadingOnFetchingRequest } = useQuery({
    queryKey: ["request", id],
    queryFn: () => getRequest(id),
  });

  if (isLoadingOnFetchingRequest)
    return (
      <div className="h-full min-h-[300px] w-full flex justify-center items-center">
        {" "}
        <Spinner />{" "}
      </div>
    );

  return (
    <div>
      {/* Go back to the list of demands */}
      <button
        className="h-8 px-4 mb-4 text-sm text-indigo-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour
      </button>

      {/* Display the details of the demand */}
      <DetailDemande demande={request} />
    </div>
  );
}
