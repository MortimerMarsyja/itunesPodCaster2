import cardStyles from "./styles";

export type CardProps = {
  cover: string;
  title: string;
  artist: string;
  size: "small" | "medium";
};

const Card = ({ cover, title, artist, size }: CardProps) => {
  const className = `${cardStyles({
    size,
  })} bg-red-500 flex flex-col justify-end items-center w-52 h-24 relative m-20 rounded-[4px] shadow-md`;
  const authority = `by ${artist}`;
  const imgSize = 80;
  return (
    <div class={className}>
      <div class="rounded-full overflow-hidden absolute bottom-16">
        <img width={imgSize} height={imgSize} src={cover} alt={title} />
      </div>
      <h3 title={title} class="flex overflow-hidden truncate max-w-16">
        {title}
      </h3>
      <p
        title={authority}
        class="flex overflow-hidden truncate max-w-[110px] mb-2"
      >
        {authority}
      </p>
    </div>
  );
};

export default Card;
