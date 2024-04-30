import { useGetPodcastFeed } from "../../api/podcatsts/hooks/useGetPodcastFeed";
import { FeedContainer } from "../../ui";
import { PodcastCard } from "../../components/card/PodcastCard";
import { SearchBar } from "../../components/search-bar";

export function HomePage() {
  const { data, setFilterTerm } = useGetPodcastFeed();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  };

  return (
    <>
      <SearchBar>
        <input onChange={handleOnchange} placeholder="Filter podcasts..." />
      </SearchBar>
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
