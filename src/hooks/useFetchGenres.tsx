import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiService } from "../services/api/ApiService";
import { useGenreStore } from "../store/genresStore";
export const useFetchGenres = () => {
  const { set } = useGenreStore();
  const query = useQuery({
    queryKey: ["genres"],
    queryFn: ApiService.getGenres,
  });
  useEffect(() => {
    if (query.data) {
      set({ genres: query.data.results });
    }
  }, [query.data]);
};
