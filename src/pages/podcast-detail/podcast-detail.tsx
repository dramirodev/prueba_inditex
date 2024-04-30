import { Layout } from "../../components/layout/layout";
import useGetPodcastById from "../../api/podcatsts/hooks/useGetPodcastById";
import { useParams } from "react-router-dom";

export function PodcastDetail() {
  const { id } = useParams();
  const { data } = useGetPodcastById(id);
  return (
    <Layout>
      <code>{JSON.stringify(data)}</code>
    </Layout>
  );
}

export default PodcastDetail;
