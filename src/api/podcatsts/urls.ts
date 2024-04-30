const PODCASTS_URLS = {
  getPodcastFeed:
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  getPodcastEpisodes: (podcastId: string) =>
    `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`,
};

export default PODCASTS_URLS;
