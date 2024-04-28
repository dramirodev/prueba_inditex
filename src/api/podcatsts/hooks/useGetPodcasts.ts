import { useQuery } from "@tanstack/react-query";
import { getPodcasts } from "../podcasts";
import { Podcasts } from "../../../types";

export function useGetPodcasts() {
  return useQuery<Podcasts>({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });
}
