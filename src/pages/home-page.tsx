import { useGetPodcasts } from "../hooks/useGetPodcasts";

export function HomePage() {
  const { data } = useGetPodcasts();

  return (
    <div>
      <h1>Home Page</h1>
      <code>{JSON.stringify(data, null, 2)}</code>
    </div>
  );
}
