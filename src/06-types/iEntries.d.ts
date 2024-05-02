import Icon from "./iIcon";

export interface iPriceAttributes {
  amount: string;
  currency: string;
}

export interface iPrice {
  label: string;
  attributes: iPriceAttributes;
}

export interface iContentTypeAttributes {
  term: string;
  label: string;
}

export interface LinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

export interface iArtist {
  label: string;
}

export interface ImgInfo {
  alt: string;
  label: string;
}

type iEntries = {
  "im:name": {
    label: string;
  };
  "im:image": ImgInfo[];
  summary: Icon;
  "im:price": iPrice;
  "im:contentType": {
    attributes: iContentTypeAttributes;
  };
  rights?: Icon;
  title: Icon;
  link: {
    attributes: LinkAttributes;
  };
  id: {
    label: string;
    attributes: {
      "im:id": string;
    };
  };
  "im:artist": iArtist;
  category: {
    attributes: {
      "im:id": string;
      term: string;
      label: string;
    };
  };
  "im:releaseDate": {
    label: Date;
    attributes: Icon;
  };
};

export default iEntries;
