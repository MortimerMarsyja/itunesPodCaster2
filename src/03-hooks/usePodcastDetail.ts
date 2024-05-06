import { signal } from "@preact/signals";
import getPodcastsData from "@services/getPodcastsData";
import { useEffect } from "preact/hooks";
import handleGetPodcastDescription from "@utils/handleGetPodcastDescription";
import { iPodcastData } from "@definitions/iPodcast";

const podcastData = signal<iPodcastData | undefined>(undefined);
const episodeList = signal([]);
const episodeListLength = signal(0);
const episodeListError = signal("");
const episodeListLoading = signal(false);
const podcastDataError = signal("");
const podcastDataLoading = signal(false);
const podcastDes = signal("");

const usePodcastDetail = (podcastId: string) => {
  const handleGetPodcastData = async () => {
    podcastDataLoading.value = true;
    try {
      await getPodcastsData({ podcastId }).then((data) => {
        podcastDataLoading.value = false;
        episodeListLength.value = JSON.parse(data?.contents).resultCount;
        const [podcast, ...podcastList] = JSON.parse(data?.contents).results;
        podcastData.value = podcast;
        episodeList.value = podcastList;
        if (podcastData.value) {
          handleGetPodcastDescription(podcastData.value).then((data) => {
            if (data) podcastDes.value = data;
          });
        }
      });
    } catch (error) {
      podcastDataError.value = String(error);
      podcastDataLoading.value = false;
    }
  };
  useEffect(() => {
    handleGetPodcastData();
  }, [podcastId]);
  return {
    podcastData,
    podcastDescription: podcastDes,
    episodeListError,
    episodeListLoading,
    episodeList,
    podcastDataError,
    podcastDataLoading,
    episodeListLength,
  };
};

export default usePodcastDetail;
