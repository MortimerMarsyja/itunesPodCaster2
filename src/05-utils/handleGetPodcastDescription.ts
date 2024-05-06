import { iPodcastData } from "@definitions/iPodcast";

const getDesc = async (podcastData: iPodcastData) => {
  return fetch(podcastData.feedUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      } else {
        throw new Error("Request failed");
      }
    })
    .then((data) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "text/xml");
      const description =
        xmlDoc.getElementsByTagName("description")[0].textContent;
      return description;
    });
};

export default getDesc;
