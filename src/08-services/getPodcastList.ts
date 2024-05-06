import fetchWithCache from "@utils/fetchWithCache";

const getPodcastList = async () => {
  const url =
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";
  const data = await fetchWithCache(url);
  return data;
};

export default getPodcastList;
