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
import { useNavigate, useParams } from "react-router-dom";
import useGetEpisodesByPodcastId from "../../../api/podcatsts/hooks/useGetEpisodesByPodcastId";

export default function PodcastEpisodesDisplayer() {
  const { id } = useParams();
  const episodesQuery = useGetEpisodesByPodcastId(id);
  const navigate = useNavigate();

  const navegateToEpisode = (episodeId: number) => {
    navigate(`/podcast/${id}/episode/${episodeId}`);
  };

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
            <PodcastEpisodesListItem
              key={episode.trackId}
              onClick={() => navegateToEpisode(episode.trackId)}
            >
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
