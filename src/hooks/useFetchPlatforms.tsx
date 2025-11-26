import { usePlatformStore } from "../store/platformsStore";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiService } from "../services/api/ApiService";
export const useFetchPlatforms = () => {
  const { set } = usePlatformStore();
  const query = useQuery({
    queryKey: ["plaforms"],
    queryFn: ApiService.getPlatforms,
  });
  useEffect(() => {
    if (query.data) {
      set({ platforms: query.data.results });
    }
  }, [query.data]);
  return query;
};
