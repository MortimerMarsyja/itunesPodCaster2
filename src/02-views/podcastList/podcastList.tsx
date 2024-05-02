import fetchWithCache from "@utils/fetchWithCache";
import { useSignal } from "@preact/signals";
import iEntries from "@types/iEntries";
import { useEffect } from "preact/hooks";

const url =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
const PodCastList = () => {
  const dataSignal = useSignal([]);
  useEffect(() => {
    fetchWithCache(url).then((fetchedData) => {
      dataSignal.value = fetchedData.feed.entry;
    });
  }, []);

  return (
    <div>
      {dataSignal.value.map((podcast: iEntries) => (
        <div className="p-3 bg-slate-500" key={podcast.id.attributes["im:id"]}>
          <img
            src={podcast["im:image"][0].label}
            alt={podcast["im:name"].label}
          />
          <h3>{podcast["im:name"].label}</h3>
          <p>{podcast["im:artist"].label}</p>
        </div>
      ))}
    </div>
  );
};

export default PodCastList;
