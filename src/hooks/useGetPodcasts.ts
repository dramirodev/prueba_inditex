import { useQuery } from "@tanstack/react-query";

// Create an API folder in the src folder and add a file named API.ts and add fetch functions

const API_URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const getPodcasts = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export function useGetPodcasts() {
  return useQuery({
    queryKey: ["podcasts"],
    queryFn: getPodcasts,
  });
}
