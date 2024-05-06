import { useParams } from "react-router-dom";
import useGetEpisodesByPodcastId from "../../../api/podcatsts/hooks/useGetEpisodesByPodcastId";
import { useMemo } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: 100%;
  border: 1px solid lightgrey;
  border-radius: 10px;
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 4;
  grid-column-end: 7;
`;

export default function PodcastEpisodesDetail() {
  const { id, episodeId } = useParams();
  const episodesQuery = useGetEpisodesByPodcastId(id);

  const episode = useMemo(
    () =>
      episodesQuery?.data?.results?.find(
        (episode) => episode.trackId === Number(episodeId)
      ),
    [episodeId, episodesQuery]
  );

  return (
    episode?.description && (
      <Container>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls>
          <source
            src={episode.episodeUrl}
            type={`${episode.episodeContentType}/${episode.episodeFileExtension}`}
          />
          {/*<source src={} type="audio/mpeg" />*/}
          Your browser does not support the audio element.
        </audio>
        <div dangerouslySetInnerHTML={{ __html: episode.description }} />
      </Container>
    )
  );
}
