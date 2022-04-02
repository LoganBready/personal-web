import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
// styles
import '../styles/global.scss';

export const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
