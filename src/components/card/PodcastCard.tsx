import {
  CardContainer,
  CardDescription,
  CardImage,
  CardSubTitle,
  CardTitle,
} from "../../ui/PodcastCard";

type PodcastCardProps = {
  name: string;
  artist: string;
  image: string;
  id: string;
};

export function PodcastCard({ id, name, image, artist }: PodcastCardProps) {
  return (
    <CardContainer key={id}>
      <CardImage src={image} alt={name} />
      <CardDescription>
        <CardTitle>{name}</CardTitle>
        <CardSubTitle>{artist}</CardSubTitle>
      </CardDescription>
    </CardContainer>
  );
}
