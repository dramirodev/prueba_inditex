export type Podcasts = {
  feed: Feed;
};

export type Feed = {
  author: Author;
  entry: Entry[];
  updated: Icon;
  rights: Icon;
  title: Icon;
  icon: Icon;
  link: Link[];
  id: Icon;
};

export type Author = {
  name: Icon;
  uri: Icon;
};

export type Icon = {
  label: string;
};

export type Entry = {
  "im:name": Icon;
  "im:image": IMImage[];
  summary: Icon;
  "im:price": IMPrice;
  "im:contentType": IMContentType;
  rights?: Icon;
  title: Icon;
  link: Link;
  id: ID;
  "im:artist": IMArtist;
  category: Category;
  "im:releaseDate": IMReleaseDate;
};

export type Category = {
  attributes: CategoryAttributes;
};

export type CategoryAttributes = {
  "im:id": string;
  term: string;
  scheme: string;
  label: PurpleLabel;
};

export enum PurpleLabel {
  MUSIC = "Music",
  MUSIC_COMMENTARY = "Music Commentary",
  MUSIC_HISTORY = "Music History",
  MUSIC_INTERVIEWS = "Music Interviews",
}

export type ID = {
  label: string;
  attributes: IDAttributes;
};

export type IDAttributes = {
  "im:id": string;
};

export type IMArtist = {
  label: string;
  attributes?: IMArtistAttributes;
};

export type IMArtistAttributes = {
  href: string;
};

export type IMContentType = {
  attributes: IMContentTypeAttributes;
};

export type IMContentTypeAttributes = {
  term: FluffyLabel;
  label: FluffyLabel;
};

export enum FluffyLabel {
  Podcast = "Podcast",
}

export type IMImage = {
  label: string;
  attributes: IMImageAttributes;
};

export type IMImageAttributes = {
  height: string;
};

export type IMPrice = {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
};

export type IMPriceAttributes = {
  amount: string;
  currency: Currency;
};

export enum Currency {
  Usd = "USD",
}

export enum IMPriceLabel {
  Get = "Get",
}

export type IMReleaseDate = {
  label: Date;
  attributes: Icon;
};

export type Link = {
  attributes: LinkAttributes;
};

export type LinkAttributes = {
  rel: Rel;
  type?: Type;
  href: string;
};

export enum Rel {
  Alternate = "alternate",
  Self = "self",
}

export enum Type {
  TextHTML = "text/html",
}
