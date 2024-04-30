import { useQuery } from "@tanstack/react-query";
import { Feed } from "../../../types";
import { getPodcastById } from "../podcasts";

export default function useGetPodcastById(podcastId?: string) {
  return useQuery<Feed>({
    queryKey: ["podcast", podcastId],
    queryFn: () => getPodcastById(podcastId),
    retry: 2,
    enabled: !!podcastId,
  });
}
