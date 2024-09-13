import React from 'react';
type  RequestStatus = 'en attente' | 'complexe' | 'traite' | 'rejete' | 'confirme';
type Service = any[];

const RequestsContext = React.createContext<{
  status: RequestStatus,
  service: Service,
  setStatus: React.Dispatch<React.SetStateAction<RequestStatus>>,
  setService: React.Dispatch<React.SetStateAction<Service>>
}>({
  status: 'en attente',
  service: [],
  setStatus: () => {},
  setService: () => {}
});

export const RequestsProvider = ({ children } : { children: React.ReactNode}) => {
    const [status, setStatus] = React.useState<RequestStatus>("en attente");
    const [service, setService] = React.useState<Service>([]);
    return (
        <RequestsContext.Provider
        value={{
            status,
            service,
            setStatus,
            setService
          }}
        >
            {children}
        </RequestsContext.Provider>
    );
};

export const useRequests = () => React.useContext(RequestsContext);