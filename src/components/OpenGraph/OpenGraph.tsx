// react | next
import Head from 'next/head';
// interface
import type { IOpenGraph } from './IOpenGraph';

export const OpenGraph = ({ type, url, title, description, image, twitterCard }: IOpenGraph) => {
  return (
    <Head>
      <title>{title}</title>
      {/* Primary Meta Tags */}
      <meta name='title' content={title} />
      <meta name='description' content={description} />
      {/* Open Graph / Facebook */}
      <meta property='og:type' content={type} />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image?.src} />
      {/* Twitter */}
      <meta property='twitter:card' content={twitterCard} />
      {/* <meta property='twitter:site' content={twitterHandle} /> */}
      {twitterCard === 'summary_large_image' && <meta property='twitter:creator' content='' />}
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image?.src} />
    </Head>
  );
};
