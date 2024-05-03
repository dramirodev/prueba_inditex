import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Entry, Podcast, Podcasts } from "../../../types";
import { getEpisodesPodcastById } from "../podcasts";

export default function useGetEpisodesByPodcastId(podcastId?: string) {
  const feed = useQueryClient().getQueryData<Podcasts>(["podcasts"]);
  const podcast = feed!.feed.entry.find(
    (podcast: Entry) => podcast.id.attributes["im:id"] === podcastId
  )!;
  return useQuery<Podcast & { podcast: Entry }>({
    queryKey: podcastId ? ["podcast", podcastId] : ["podcast"],
    queryFn: () => getEpisodesPodcastById(podcastId),
    enabled: !!podcastId,
    select: (data) => {
      return {
        ...data,
        podcast,
      };
    },
  });
}
