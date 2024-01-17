import { useQuery } from "@apollo/client";
import { ALL_TOURS } from "../tours";

export const GetTours = () => {
  const { loading, error, data } = useQuery(ALL_TOURS);

  if (loading) {
    return "Loading...";
  }
  if (error) {
    return "Error...";
  }

  return data;
};
