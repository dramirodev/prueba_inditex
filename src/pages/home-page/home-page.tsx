import { useGetPodcasts } from "../../api/podcatsts/hooks/useGetPodcasts";
import { FeedContainer, PageContainer, Title } from "../../ui";
import { PodcastCard } from "../../components/Card/PodcastCard";

export function HomePage() {
  const { data } = useGetPodcasts();

  return (
    <PageContainer>
      <Title>Podcaster</Title>
      <FeedContainer>
        {data?.feed.entry.map((entry) => (
          <PodcastCard
            name={entry["im:name"].label}
            artist={entry["im:artist"].label}
            image={entry["im:image"][2].label}
            key={entry.id.attributes["im:id"]}
            id={entry.id.attributes["im:id"]}
          />
        ))}
      </FeedContainer>
    </PageContainer>
  );
}
