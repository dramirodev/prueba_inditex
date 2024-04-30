import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPodcasts } from "../podcasts";
import { Podcasts } from "../../../types";
import { useCallback, useState } from "react";

export function useGetPodcasts() {
  const [term, setTerm] = useState<string | null>(null);

  const filterByTerm = useCallback(
    (data: Podcasts) => {
      const x = { ...data };
      x.feed.entry = term
        ? x?.feed.entry.filter((entry) => {
            return (
              entry.category.attributes.term
                .toLowerCase()
                .includes(term.toLowerCase()) ||
              entry["im:name"].label.toLowerCase().includes(term.toLowerCase())
            );
          })
        : data?.feed.entry;
      return x;
    },
    [term]
  );
  const { data, isLoading, isError } = useQuery<Podcasts>({
    queryKey: term ? ["podcasts", term] : ["podcasts"],
    queryFn: getPodcasts,
    retry: 2,
    select: filterByTerm,
    initialData: useQueryClient().getQueryData<Podcasts>(["podcasts"]),
  });

  const setFilterTerm = useCallback((term: string) => {
    setTerm(term);
  }, []);

  return { data, isLoading, isError, setFilterTerm };
}
