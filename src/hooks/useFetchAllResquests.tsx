import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFetchAllRequests(url: string) {

  const getAllRequests = async () => {
    const response = await axios.get(url);
    return response.data;
  };
  const {
    isLoading: isLoadingOnFetchingRequestsList,
    isError: isErrorOnFetchingRequestsList,
    data: requests = [],
    error,
  } = useQuery({
    queryKey: ["requests", url],
    queryFn: getAllRequests,
  });

  return {
    isErrorOnFetchingRequestsList,
    isLoadingOnFetchingRequestsList,
    requests,
    error,
  };
}
