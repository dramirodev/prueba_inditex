import {
  PodcastEpisodes,
  PodcastEpisodesList,
  PodcastEpisodesListItem,
} from "../ui/podcast-detail";
import {
  DateTimeFromIso,
  DurationFromMillisecondsToMinutes,
} from "../../../lib/date";
import { Episode } from "../../../types";

type PodcastEpisodesDisplayerProps = {
  episodes?: Episode[];
};

export function PodcastEpisodesDisplayer({
  episodes,
}: Readonly<PodcastEpisodesDisplayerProps>) {
  return (
    <PodcastEpisodes>
      <PodcastEpisodesList>
        <PodcastEpisodesListItem>
          <div>Title</div>
          <div>Date</div>
          <div>Duration</div>
        </PodcastEpisodesListItem>
        {episodes?.map((episode) => (
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
  );
}
