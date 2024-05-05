import fetchWithCache from "@utils/fetchWithCache";
import { iEntries } from "@definitions/iEntries";
import { useEffect } from "preact/hooks";
import Card from "@components/card";
import MainLayout from "@layouts/main/mainLayout";
import store from "@store/store";
import { JSX } from "preact";
import { signal } from "@preact/signals";
import useFilterEntries from "@hooks/useFilterEntries";

const filter = signal("");

const url =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
const PodCastList = () => {
  useEffect(() => {
    fetchWithCache(url).then((fetchedData) => {
      store("entries").value = fetchedData.feed.entry;
    });
  }, []);
  const { result } = useFilterEntries({ activeFilter: filter.value });
  return (
    <MainLayout>
      <div class="w-full flex justify-end items-center">
        <span>{result.length}</span>
        <input
          class="rounded-md w-36 h-8 m-4"
          onKeyDown={(evt: JSX.TargetedEvent<HTMLInputElement, Event>) => {
            const target = evt.target as HTMLInputElement;
            filter.value = target.value;
          }}
        />
      </div>
      <div class="flex flex-wrap justify-center">
        {result.map((podcast: iEntries) => (
          <Card
            artist={podcast["im:artist"].label}
            cover={podcast["im:image"][0].label}
            title={podcast["im:name"].label}
            size="small"
            key={podcast.id}
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default PodCastList;
