import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ApiService } from "../services/api/ApiService";
import { useTagsStore } from "../store/tagsStore";
export const useFetchTags = () => {
  const { set } = useTagsStore();
  const query = useQuery({
    queryKey: ["tags"],
    queryFn: ApiService.getTags,
  });

  useEffect(() => {
    if (query.data?.results) {
     
      set({ tags: query.data.results });
    }
  }, [query.data]);
};
