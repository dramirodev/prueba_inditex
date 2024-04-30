import {
  CardContainer,
  CardDescription,
  CardImage,
  CardSubTitle,
  CardTitle,
} from "../../ui/PodcastCard";
import { Link } from "react-router-dom";

type PodcastCardProps = {
  name: string;
  artist: string;
  image: string;
  id?: string;
};

export function PodcastCard({
  name,
  image,
  artist,
  id,
}: Readonly<PodcastCardProps>) {
  return (
    <Link to={`/podcast/${id}`}>
      <CardContainer>
        <CardImage src={image} alt={name} />
        <CardDescription>
          <CardTitle>{name}</CardTitle>
          <CardSubTitle>{artist}</CardSubTitle>
        </CardDescription>
      </CardContainer>
    </Link>
  );
}
