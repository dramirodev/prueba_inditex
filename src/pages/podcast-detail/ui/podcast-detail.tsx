import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 20px repeat(3, auto);
  grid-template-columns: repeat(6, 1fr);

  gap: 20px;
  height: 100%;
`;

export const PodcastDescription = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;

  grid-row-end: 4;
  grid-column-end: 3;
`;

export const PodcastHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 3;
  grid-row-end: 2;
  grid-column-end: 7;
`;

export const PodcastEpisodes = styled.div`
  grid-row-start: 2;
  grid-column-start: 3;
  grid-row-end: 5;
  grid-column-end: 7;
`;

export const PodcastEpisodesList = styled.ul`
  padding: 20px;
  border: 1px solid lightgrey;
  border-radius: 10px;
`;

export const PodcastEpisodesListItem = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 20px;
  border-bottom: 1px solid lightgrey;
  padding: 10px 0;
  font-size: 0.8rem;
  cursor: pointer;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    border-bottom: none;
  }
`;
