import fetchWithCache from "@utils/fetchWithCache";

const getPodcastsData = async ({ podcastId }: { podcastId: string }) => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
  const urlWithoutCors = `https://api.allorigins.win/get?charset=UTF-8&url=${encodeURIComponent(url)}`;
  const data = await fetchWithCache(urlWithoutCors);
  return data;
};

export default getPodcastsData;
