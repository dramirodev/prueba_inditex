import { useQuery } from "@tanstack/react-query";

export function useGetPodcasts() {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: async () => {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      return await response.json();
    },
  });
}
