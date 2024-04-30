import { Entry, Podcasts } from "../../../../types";

export function getPredicate(term: string) {
  return (entry: Entry) => {
    const sanitizedTerm = term.toLowerCase().trim();
    return (
      entry.title.label.toLowerCase().includes(sanitizedTerm) ||
      entry["im:name"].label.toLowerCase().includes(sanitizedTerm)
    );
  };
}

export function filterByTerm(term: string | null) {
  return (data: Podcasts) => {
    if (!term) {
      return data;
    }
    return {
      feed: {
        ...data.feed,
        entry: data.feed.entry.filter(getPredicate(term)),
      },
    };
  };
}
