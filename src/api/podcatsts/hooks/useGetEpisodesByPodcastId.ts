import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Entry, Feed, Podcasts } from "../../../types";
import { getEpisodesPodcastById } from "../podcasts";
import { useMemo } from "react";

export default function useGetEpisodesByPodcastId(podcastId?: string) {
  const feed = useQueryClient().getQueryData<Podcasts>(["podcasts"]);
  const { data, isError, isLoading } = useQuery<Feed & { podcast?: Entry }>({
    queryKey: podcastId ? ["podcast", podcastId] : ["podcast"],
    queryFn: () => getEpisodesPodcastById(podcastId),
    retry: 2,
    enabled: !!podcastId,
    meta: { podcastId },
    select: (data) => {
      const podcast = feed?.feed.entry.find(
        (podcast: Entry) => podcast.id.attributes["im:id"] === podcastId
      );

      return {
        ...data,
        podcast,
      };
    },
  });

  return useMemo(
    () => ({
      data,
      isError,
      isLoading,
    }),
    [data, isError, isLoading]
  );
}
