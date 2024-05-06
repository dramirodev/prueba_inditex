import {
  PodcastEpisodes,
  PodcastEpisodesList,
  PodcastEpisodesListItem,
  PodcastHeader,
} from "../ui/podcast-detail";
import {
  DateTimeFromIso,
  DurationFromMillisecondsToMinutes,
} from "../../../lib/date";
import { useParams } from "react-router-dom";
import useGetEpisodesByPodcastId from "../../../api/podcatsts/hooks/useGetEpisodesByPodcastId";

export default function PodcastEpisodesDisplayer() {
  const { id } = useParams();
  const episodesQuery = useGetEpisodesByPodcastId(id);

  return (
    <>
      <PodcastHeader>
        Episodes {episodesQuery?.data?.resultCount ?? 0}
      </PodcastHeader>
      <PodcastEpisodes>
        <PodcastEpisodesList>
          <PodcastEpisodesListItem>
            <div>Title</div>
            <div>Date</div>
            <div>Duration</div>
          </PodcastEpisodesListItem>
          {episodesQuery?.data?.results?.map((episode) => (
            <PodcastEpisodesListItem key={episode.trackId}>
              <div>{episode.trackName}</div>
              <div>{DateTimeFromIso(episode.releaseDate.toString())}</div>
              <div>
                {DurationFromMillisecondsToMinutes(episode.trackTimeMillis)}
              </div>
            </PodcastEpisodesListItem>
          ))}
        </PodcastEpisodesList>
      </PodcastEpisodes>
    </>
  );
}
