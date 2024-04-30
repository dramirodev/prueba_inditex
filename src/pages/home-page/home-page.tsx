import { useGetPodcasts } from "../../api/podcatsts/hooks/useGetPodcasts";
import { FeedContainer } from "../../ui";
import { PodcastCard } from "../../components/card/PodcastCard";

export function HomePage() {
  const { data, setFilterTerm } = useGetPodcasts();

  return (
    <>
      <input onChange={(e) => setFilterTerm(e.target.value)} />
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
    </>
  );
}
