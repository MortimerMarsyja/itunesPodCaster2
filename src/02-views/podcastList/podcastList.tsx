import { fetchWithCache } from "@utils/fetchWithCache";
import { effect, useSignal } from "@preact/signals";

const url =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
const PodCastList = () => {
  const dataSignal = useSignal([]);

  effect(() => {
    fetchWithCache(url).then((fetchedData) => {
      console.log(fetchedData);
      dataSignal.value = fetchedData.feed.entry;
    });
  });

  return <div>{JSON.stringify(dataSignal.value, null, 2)}</div>;
};

export default PodCastList;
