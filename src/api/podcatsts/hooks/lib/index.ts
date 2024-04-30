import { Entry } from "../../../../types";

export function getPredicate(term: string) {
  return (entry: Entry) => {
    const sanitizedTerm = term.toLowerCase().trim();
    return (
      entry.title.label.toLowerCase().includes(sanitizedTerm) ||
      entry["im:name"].label.toLowerCase().includes(sanitizedTerm)
    );
  };
}
