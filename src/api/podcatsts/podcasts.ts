import PODCASTS_URLS from "./urls";

export const getPodcastFeed = async () => {
  const response = await fetch(PODCASTS_URLS.getPodcastFeed);
  return await response.json();
};

export const getEpisodesPodcastById = async (podcastId = "") => {
  const response = await fetch(PODCASTS_URLS.getPodcastEpisodes(podcastId));
  return await response.json();
};
