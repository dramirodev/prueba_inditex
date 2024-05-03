export type Podcast = {
  resultCount: number;
  results: Episode[];
};

export type Episode = {
  wrapperType: WrapperType;
  kind: Kind;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: Name;
  trackName: string;
  collectionCensoredName?: Name;
  trackCensoredName?: Name;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: Date;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: Country;
  currency?: string;
  primaryGenreName?: PrimaryGenreNameEnum;
  contentAdvisoryRating: ContentAdvisoryRating;
  artworkUrl600: string;
  genreIds?: string[];
  genres: Array<GenreClass | string>;
  previewUrl?: string;
  shortDescription?: string;
  artistIds?: number[];
  closedCaptioning?: ClosedCaptioning;
  episodeGuid?: string;
  description?: string;
  episodeUrl?: string;
  artworkUrl160?: string;
  episodeContentType?: EpisodeContentType;
  episodeFileExtension?: EpisodeFileExtension;
};

export enum ClosedCaptioning {
  None = "none",
}

export enum Name {
  TheJoeBuddenPodcast = "The Joe Budden Podcast",
}

export enum ContentAdvisoryRating {
  Clean = "Clean",
  Explicit = "Explicit",
}

export enum Country {
  Usa = "USA",
}

export enum EpisodeContentType {
  Audio = "audio",
}

export enum EpisodeFileExtension {
  Mp3 = "mp3",
}

export type GenreClass = {
  name: PrimaryGenreNameEnum;
  id: string;
};

export enum PrimaryGenreNameEnum {
  Music = "Music",
}

export enum Kind {
  Podcast = "podcast",
  PodcastEpisode = "podcast-episode",
}

export enum WrapperType {
  PodcastEpisode = "podcastEpisode",
  Track = "track",
}
