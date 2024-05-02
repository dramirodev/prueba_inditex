import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Entry, Feed, Podcasts } from "../../../types";
import { getEpisodesPodcastById } from "../podcasts";

export default function useGetEpisodesByPodcastId(podcastId?: string) {
  const feed = useQueryClient().getQueryData<Podcasts>(["podcasts"]);
  const podcast = feed!.feed.entry.find(
    (podcast: Entry) => podcast.id.attributes["im:id"] === podcastId
  )!;
  return useQuery<Feed & { podcast: Entry }>({
    queryKey: podcastId ? ["podcast", podcastId] : ["podcast"],
    queryFn: () => getEpisodesPodcastById(podcastId),
    retry: 2,
    enabled: !!podcastId,
    select: (data) => {
      return {
        ...data,
        podcast,
      };
    },
  });
}
