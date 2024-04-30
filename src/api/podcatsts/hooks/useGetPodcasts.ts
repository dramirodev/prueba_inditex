import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPodcasts } from "../podcasts";
import { Podcasts } from "../../../types";
import { useCallback, useState } from "react";
import { getPredicate } from "./lib";

export function useGetPodcasts() {
  const [term, setTerm] = useState<string | null>(null);

  const initialData = useQueryClient().getQueryData<Podcasts>(["podcasts"]);

  const filterByTerm = useCallback(
    (data: Podcasts) => {
      const dummyData = { ...data };
      dummyData.feed.entry = term
        ? dummyData?.feed.entry.filter(getPredicate(term))
        : initialData?.feed.entry || [];
      return dummyData;
    },
    [term, initialData]
  );
  const { data, isLoading, isError } = useQuery<Podcasts>({
    queryKey: term ? ["podcasts", term] : ["podcasts"],
    queryFn: getPodcasts,
    retry: 2,
    select: filterByTerm,
    initialData,
  });

  const setFilterTerm = useCallback((term: string) => {
    setTerm(term);
  }, []);

  return { data, isLoading, isError, setFilterTerm };
}
