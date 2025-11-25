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
    console.log(query.data);
    if (query.data) {
      console.log(`generos desde la API: ${query.data.results}`);
      set({ genres: query.data.results });
    }
  }, [query.data]);
};
