import React from "react";
import { RequestsContext } from "../providers/RequestsProvider";

export const useRequests = () => React.useContext(RequestsContext);
