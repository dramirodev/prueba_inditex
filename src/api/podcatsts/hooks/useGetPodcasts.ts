import { useQuery } from "@tanstack/react-query";
import { getPodcasts } from "../podcasts";

export function useGetPodcasts() {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });
}
