import { useEffect } from "react";
import { usePublishersStore } from "../store/publishersStore";
import { useQuery } from "@tanstack/react-query";
import { ApiService } from "../services/api/ApiService";
export const useFetchPublishers = () => {
  const { set } = usePublishersStore();
  const query = useQuery({
	queryKey: ["publishers"],
	queryFn: () => ApiService.getPublishers(),
  });

  useEffect(() => {
	if (query.data) {
	  set({publishers:query.data.results});
	}
  }, [query.data]);
  return query;
};
