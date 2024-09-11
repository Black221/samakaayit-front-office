import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function useFetchAllRequests() {
  const getAllRequests = async () => {
    const response = await axios.get(`${BASE_URL}/requests`);
    return response.data;
  };
  const {
    isLoading: isLoadingOnFetchingRequestsList,
    isError: isErrorOnFetchingRequestsList,
    data: requests = [],
    error,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: getAllRequests,
  });

  return {
    isErrorOnFetchingRequestsList,
    isLoadingOnFetchingRequestsList,
    requests,
    error,
  };
}
