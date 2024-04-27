import PODCASTS_URLS from "./urls";

export const getPodcasts = async () => {
  const response = await fetch(PODCASTS_URLS.getPodcasts);
  return await response.json();
};
