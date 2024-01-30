// ** Third Party Imports
import axios from "axios";
import { useQuery } from "react-query";
import { WebCardData } from "../models/interface";
import { QueryKeys } from "../utils/queryKeys";

// webCard Http Api calls
export const getWebCards = async () => {
  try {
    const { data } = await axios.get(`/api/web/get-web-cards`);
    return data.webCardDB;
  } catch (error) {
    console.error("Error fetching web cards:", error);
    return [];
  }
};


export const useGetWebCards = () => {
    return useQuery<WebCardData[]>(QueryKeys.WebCards, getWebCards);
}