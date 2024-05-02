import { Entry } from "../../types";
import { PodcastCard } from "../card/podcast-card";

export function PodcastFeed(entry: Readonly<Entry>) {
  return (
    <PodcastCard
      name={entry["im:name"].label}
      artist={entry["im:artist"].label}
      image={entry["im:image"][2].label}
      key={entry.id.attributes["im:id"]}
      id={entry.id.attributes["im:id"]}
    />
  );
}
