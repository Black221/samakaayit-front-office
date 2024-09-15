import React from "react";
import { RequestStatusContext } from "../providers/RequestStatusProvider";

export const useRequestStatus = () => React.useContext(RequestStatusContext);
