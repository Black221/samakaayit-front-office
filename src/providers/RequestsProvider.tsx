import React from 'react';
type  RequestStatus = 'en attente' | 'complexe' | 'traite' | 'rejete' | 'confirme';

export const RequestsContext = React.createContext<{
  request: any,
  setRequest: React.Dispatch<React.SetStateAction<any>>,
  filterByStatus: (status: RequestStatus) => void,
  filterByService: (serviceId: string) => void,
}>({
  request: null,
  setRequest: () => null,
  filterByStatus: () => null,
  filterByService: () => null
});

export const RequestsProvider = ({ children } : { children: React.ReactNode}) => {
    const [request, setRequest] = React.useState<any>(null);
    return (
        <RequestsContext.Provider
        value={{
            request,
            setRequest,
            filterByStatus: (status: RequestStatus) => {
                switch (status) {
                    case 'en attente':
                        return request.data.filter((request:any) => request.status === 'en-cours');
                        break;
                    case 'complexe':
                        return request.data.filter((request:any) => request.status === 'complexe');
                        break;
                    case 'traite':
                        return request.data.filter((request:any) => request.status === 'traité');
                        break;
                    case 'rejete':
                      return request.data.filter((request:any) => request.status === 'rejeté');
                      break;
                    case 'confirme':
                        return request.data.filter((request:any) => request.status === 'confirmé');
                        break;
                    default:
                        return request;
                }
            },
            filterByService: (serviceName: string) => {
              console.log("serviceName", request);
                const filteredRequests = request.filter((request:any) => request.service.name === serviceName);
                return filteredRequests;
            }
          }}
        >
            {children}
        </RequestsContext.Provider>
    );
};
