import store from "@store/store";
import { iEntries } from "@definitions/iEntries";

const entries = store("entries");

type useSearchSelectProps = {
  activeFilter: string;
};

const handleFilterEntries = ({ activeFilter }: useSearchSelectProps) => {
  if (activeFilter === "") return entries.value;
  const filteredData: iEntries[] = entries.value.filter((item) => {
    const artist = item["im:artist"].label;
    const title = item["im:name"].label;
    if (artist === activeFilter || title === title) return item;
  });
  console.log("activeFilter", activeFilter, filteredData);
  return filteredData;
};

export default handleFilterEntries;
