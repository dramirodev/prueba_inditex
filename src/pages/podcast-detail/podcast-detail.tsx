import { Layout } from "../../components/layout/layout";
import useGetEpisodesByPodcastId from "../../api/podcatsts/hooks/useGetEpisodesByPodcastId";
import { useParams } from "react-router-dom";

export function PodcastDetail() {
  const { id } = useParams();
  const { data, podcast } = useGetEpisodesByPodcastId(id);

  console.log({ podcast });
  return (
    <Layout>
      <p>{podcast?.summary.label}</p>
      <code>{JSON.stringify(data)}</code>
    </Layout>
  );
}

export default PodcastDetail;
