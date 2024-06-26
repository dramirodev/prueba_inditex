import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPodcastFeed } from "../podcasts";
import { Podcasts } from "../../../types";
import { useCallback, useMemo, useState } from "react";
import { filterByTerm } from "./lib";

export function useGetPodcastFeed() {
  const [term, setTerm] = useState<string | null>(null);

  const initialData = useQueryClient().getQueryData<Podcasts>(["podcasts"]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const filterTerm = useCallback(filterByTerm(term), [term]);
  const { data, isLoading, isError } = useQuery<Podcasts>({
    queryKey: term ? ["podcasts", term] : ["podcasts"],
    queryFn: getPodcastFeed,
    select: filterTerm,
    initialData,
  });

  const setFilterTerm = useCallback((term: string) => {
    setTerm(term);
  }, []);

  return useMemo(
    () => ({ data, isLoading, isError, setFilterTerm }),
    [data, isLoading, isError, setFilterTerm]
  );
}
