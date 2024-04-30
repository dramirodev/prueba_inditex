import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Entry, Feed, Podcasts } from "../../../types";
import { getEpisodesPodcastById } from "../podcasts";
import { useMemo } from "react";

export default function useGetEpisodesByPodcastId(podcastId?: string) {
  //TODO: find a best way to return podcast data
  const feed = useQueryClient().getQueryData<Podcasts>(["podcasts"]);

  const podcast = useMemo(
    () =>
      feed?.feed.entry.find(
        (podcast: Entry) => podcast.id.attributes["im:id"] === podcastId
      ),
    [podcastId]
  );

  const { data, isError, isLoading } = useQuery<Feed>({
    queryKey: ["podcast", podcastId],
    queryFn: () => getEpisodesPodcastById(podcastId),
    retry: 2,
    enabled: !!podcastId,
  });

  return useMemo(
    () => ({
      data,
      isError,
      isLoading,
      podcast,
    }),
    [data, isError, isLoading, podcast]
  );
}
