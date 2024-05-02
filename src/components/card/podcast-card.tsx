import {
  CardContainer,
  CardDescription,
  CardImage,
  CardSubTitle,
  CardTitle,
  PodcastDescriptioner,
} from "../../ui/podcast-card";
import { Link } from "react-router-dom";
import styled from "styled-components";

type PodcastCardProps = {
  name: string;
  artist: string;
  image: string;
  id?: string;
  description?: string;
};

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function PodcastCard({
  name,
  image,
  artist,
  id,
  description,
}: Readonly<PodcastCardProps>) {
  return (
    <LinkContainer to={`/podcast/${id}`}>
      <CardImage src={image} alt={name} />
      <CardContainer>
        <CardDescription>
          <CardTitle>{name}</CardTitle>
          <CardSubTitle>{artist}</CardSubTitle>
          {description && (
            <PodcastDescriptioner>{description}</PodcastDescriptioner>
          )}
        </CardDescription>
      </CardContainer>
    </LinkContainer>
  );
}
