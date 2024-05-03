import { Layout } from "../../components/layout/layout";
import useGetEpisodesByPodcastId from "../../api/podcatsts/hooks/useGetEpisodesByPodcastId";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PodcastCard } from "../../components/card/podcast-card";
import {
  DateTimeFromIso,
  DurationFromMillisecondsToMinutes,
} from "../../lib/date";

const Container = styled.div`
  display: grid;

  grid-template-rows: 20px repeat(3, auto);
  grid-template-columns: repeat(6, 1fr);

  gap: 20px;
  height: 100%;
`;

const PodcastDescription = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 4;
  grid-column-end: 3;
`;

const PodcastHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 7;
`;

const PodcastEpisodes = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 5;
  grid-column-end: 7;
`;

export function PodcastDetail() {
  const { id } = useParams();
  const episodesQuery = useGetEpisodesByPodcastId(id);

  return (
    <Layout>
      <Container>
        <PodcastDescription>
          {!!episodesQuery.data?.podcast && (
            <PodcastCard
              name={episodesQuery.data.podcast["im:name"].label}
              artist={episodesQuery.data.podcast["im:artist"].label}
              image={episodesQuery.data.podcast["im:image"][2].label}
              key={episodesQuery.data.podcast.id.attributes["im:id"]}
              id={episodesQuery.data.podcast.id.attributes["im:id"]}
              description={episodesQuery.data?.podcast?.summary.label}
            />
          )}
        </PodcastDescription>
        <PodcastHeader>
          Episodes {episodesQuery?.data?.resultCount ?? 0}
        </PodcastHeader>
        <PodcastEpisodes>
          <ul>
            <li
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 1fr 1fr",
                gap: "20px",
              }}
            >
              <div>Title</div>
              <div>Date</div>
              <div>Duration</div>
            </li>
            {episodesQuery?.data?.results?.map((episode) => (
              <li
                key={episode.trackId}
                style={{
                  display: "grid",
                  gridTemplateColumns: "3fr 1fr 1fr",
                  gap: "20px",
                }}
              >
                <div>{episode.trackName}</div>
                <div>{DateTimeFromIso(episode.releaseDate.toString())}</div>
                <div>
                  {DurationFromMillisecondsToMinutes(episode.trackTimeMillis)}
                </div>
              </li>
            ))}
          </ul>
        </PodcastEpisodes>
      </Container>
    </Layout>
  );
}

export default PodcastDetail;
