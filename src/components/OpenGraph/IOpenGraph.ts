export interface IOpenGraph {
  type?: string;
  url?: string;
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  twitterCard?: string;
}
