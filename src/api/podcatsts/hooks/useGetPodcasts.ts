import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPodcasts } from "../podcasts";
import { Podcasts } from "../../../types";
import { useCallback, useMemo, useState } from "react";
import { filterByTerm } from "./lib";

export function useGetPodcasts() {
  const [term, setTerm] = useState<string | null>(null);

  const initialData = useQueryClient().getQueryData<Podcasts>(["podcasts"]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const x = useCallback(filterByTerm(term), [term]);
  const { data, isLoading, isError } = useQuery<Podcasts>({
    queryKey: term ? ["podcasts", term] : ["podcasts"],
    queryFn: getPodcasts,
    retry: 2,
    select: x,
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
