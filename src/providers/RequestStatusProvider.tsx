import React from 'react';
type  RequestStatus = 'en attente' | 'complexe' | 'traite' | 'rejete' | 'confirme';

const RequestStatusContext = React.createContext<{
  status: RequestStatus,
  setStatus: React.Dispatch<React.SetStateAction<RequestStatus>>
}>({
  status: 'en attente',
  setStatus: () => {}
});

export const RequestStatusProvider = ({ children } : { children: React.ReactNode}) => {
    const [status, setStatus] = React.useState<RequestStatus>("en attente");
    return (
        <RequestStatusContext.Provider
        value={{
            status,
            setStatus
          }}
        >
            {children}
        </RequestStatusContext.Provider>
    );
};

export const useRequestStatus = () => React.useContext(RequestStatusContext);