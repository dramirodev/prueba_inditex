import { useGetPodcastFeed } from "../../api/podcatsts/hooks/useGetPodcastFeed";
import { FeedContainer } from "../../ui";
import { SearchBar } from "../../components/search-bar";
import { Layout } from "../../components/layout/layout";
import { PodcastFeed } from "../../components/podcast-feed/podcast-feed";

export function HomePage() {
  const { data, setFilterTerm } = useGetPodcastFeed();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterTerm(e.target.value);
  };

  return (
    <Layout>
      <SearchBar>
        <input onChange={handleOnchange} placeholder="Filter podcasts..." />
      </SearchBar>
      <FeedContainer>{data?.feed.entry.map(PodcastFeed)}</FeedContainer>
    </Layout>
  );
}

export default HomePage;
