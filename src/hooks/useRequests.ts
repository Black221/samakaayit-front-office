import React from "react";
import { RequestStatusContext } from "../providers/RequestStatusProvider";

export const useRequests = () => React.useContext(RequestStatusContext);
