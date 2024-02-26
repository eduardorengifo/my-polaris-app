import '@/shared/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Polaris App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
