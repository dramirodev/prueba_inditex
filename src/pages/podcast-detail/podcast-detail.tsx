import { Layout } from "../../components/layout/layout";
import useGetEpisodesByPodcastId from "../../api/podcatsts/hooks/useGetEpisodesByPodcastId";
import { Outlet, useParams } from "react-router-dom";
import { PodcastCard } from "../../components/card/podcast-card";
import { Container, PodcastDescription } from "./ui/podcast-detail";

export function PodcastDetail() {
  const { id } = useParams();
  const episodesQuery = useGetEpisodesByPodcastId(id);

  return (
    <Layout>
      <Container>
        <PodcastDescription>
          {!!episodesQuery.data?.podcast && (
            <PodcastCard
              name={episodesQuery.data.podcast["im:name"].label}
              artist={episodesQuery.data.podcast["im:artist"].label}
              image={episodesQuery.data.podcast["im:image"][2].label}
              key={episodesQuery.data.podcast.id.attributes["im:id"]}
              id={episodesQuery.data.podcast.id.attributes["im:id"]}
              description={episodesQuery.data?.podcast?.summary.label}
            />
          )}
        </PodcastDescription>
        <Outlet />
      </Container>
    </Layout>
  );
}

export default PodcastDetail;
