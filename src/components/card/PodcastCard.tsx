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
  id?: string;
};

export function PodcastCard({
  name,
  image,
  artist,
}: Readonly<PodcastCardProps>) {
  return (
    <CardContainer>
      <CardImage src={image} alt={name} />
      <CardDescription>
        <CardTitle>{name}</CardTitle>
        <CardSubTitle>{artist}</CardSubTitle>
      </CardDescription>
    </CardContainer>
  );
}
