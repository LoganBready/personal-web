// react | next
import Head from 'next/head';
// interface
import type { IOpenGraph } from '../components/OpenGraph/IOpenGraph';
// components
import { OpenGraph } from '../components/OpenGraph/OpenGraph';

interface IBaseLayout {
  openGraph?: IOpenGraph;
  children?: React.ReactNode;
}

export const BaseLayout = ({ openGraph, children }: IBaseLayout) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      </Head>
      <OpenGraph {...openGraph} />
      {/* Header */}
      <main id='main-content' data-content='main'>
        {children}
      </main>
      {/* Footer */}
    </>
  );
};
