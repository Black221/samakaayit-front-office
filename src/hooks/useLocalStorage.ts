import { useState, useEffect} from "react";
import { UserModel } from "../types/models";

function getStorageValue(key:string): UserModel | null {
  const saved:any = localStorage.getItem(key);
  console.log(saved);
  return JSON.parse(saved) || null;
}

export const useLocalStorage = (key:string) => {
  const [state, setState] = useState<UserModel | null>(null);

  useEffect(() => {
    setState(getStorageValue(key));
  }, [key]);

  return state;
};

