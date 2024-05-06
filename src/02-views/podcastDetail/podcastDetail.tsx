import PodcastCard from "@components/podcastCard";
import Table from "@components/table";
import { iEpisode } from "@definitions/iEpisode";
import PodcastLayout from "@layouts/podcastLayout";
import usePodcastDetail from "@hooks/usePodcastDetail";
import { useNavigate } from "@tanstack/react-router";

interface Props {
  podcastId: string;
}

type TableData = iEpisode & { id: number };

const PodcastDetail = ({ podcastId }: Props) => {
  const navigate = useNavigate();
  const {
    podcastData,
    podcastDescription,
    episodeList,
    episodeListLength,
    episodeListError,
    episodeListLoading,
    podcastDataError,
    podcastDataLoading,
  } = usePodcastDetail(podcastId);

  if (!podcastId) {
    navigate({
      to: "/",
      search: false,
    });
  }

  const handleNavigate = (rowData: iEpisode) => {
    const { trackId } = rowData;
    const podcastId = localStorage.getItem("podcastId");
    localStorage.setItem("episodeData", JSON.stringify(rowData));
    navigate({
      to: `/podcast/${podcastId}/episode/${trackId}`,
    });
  };

  return (
    <div className="flex gap-4">
      {podcastDataError.value && <div>Error: {podcastDataError}</div>}
      {!podcastDataLoading.value &&
        podcastData.value &&
        !episodeListError.value &&
        !episodeListLoading.value && (
          <PodcastLayout
            leftSide={
              <PodcastCard
                collectionName={podcastData.value.collectionName}
                description={podcastDescription.value}
                image={podcastData.value.artworkUrl100}
                artist={podcastData.value.artistName}
              />
            }
            rightSide={
              <>
                <div className="text-start w-full shadow-md p-3 font-bold">
                  Episodes: {episodeListLength || 0}
                </div>
                {episodeList.value && episodeListLength.value > 0 && (
                  <div className="w-full shadow-md mt-3 flex justify-center p-3">
                    <Table<TableData>
                      data={episodeList.value.map((podcast: iEpisode) => ({
                        ...podcast,
                        id: podcast.trackId,
                      }))}
                      onRowClick={handleNavigate}
                      headers={[
                        {
                          id: "trackName",
                          key: "trackName",
                          label: "Title",
                        },
                        {
                          id: "releaseDate",
                          key: "releaseDate",
                          label: "Date",
                          render: (value) => {
                            const date = `${value}`;
                            return date && new Date(date).toLocaleDateString();
                          },
                        },
                        {
                          id: "trackTimeMillis",
                          key: "trackTimeMillis",
                          label: "Duration",
                          render: (value) => {
                            const date = value as number;
                            return date && new Date(date).toLocaleTimeString();
                          },
                        },
                      ]}
                    />
                  </div>
                )}
              </>
            }
          />
        )}
    </div>
  );
};

export default PodcastDetail;
