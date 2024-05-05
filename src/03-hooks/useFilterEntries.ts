import { signal } from "@preact/signals";
import store from "@store/store";
import { iEntries } from "@definitions/iEntries";

const entries = store("entries");

type useSearchSelectProps = {
  activeFilter: string;
};

function useFilterEntries({ activeFilter }: useSearchSelectProps) {
  const filteredEntries = signal(entries.value);
  if (activeFilter === "") {
    filteredEntries.value = entries.value;
    return { result: filteredEntries.value };
  }
  const filteredData: iEntries[] = entries.value.filter((item) => {
    const artist = item["im:artist"].label;
    const title = item["im:name"].label;
    if (artist.includes(activeFilter) || title.includes(activeFilter))
      return item;
  });
  console.log("activeFilter", activeFilter, filteredData);
  filteredEntries.value = filteredData;
  return { result: filteredEntries.value };
}

export default useFilterEntries;
