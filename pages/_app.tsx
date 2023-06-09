import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";

import store from "../store";
import "../components/layout/layout.css";
import "../components/main/cardList/cardArrow.css";
import "../styles/globals.css";
import { Loading } from "../components/Loading";
import { useSsrPageLoading } from "../hooks/useIsSsrPageLoading";

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useSsrPageLoading();
  return (
    <>
      <Head>
        <title>Anand Krishnan M J Portfolio - Full Stack Developer</title>
        <meta
          name="description"
          content="Anand Krishnan M J is a Full Stack Developer with expertise in React.js, Node.js, Express.js, PostgreSQL, Docker and Next.js."
        />
        <meta
          name="keywords"
          content="Anand Krishnan M J, Portfolio, Full Stack Developer, React.js, Node.js, Express.js, PostgreSQL, Next.js, Docker"
        />
        <meta name="author" content="Anand Krishnan M J" />
        <meta
          property="og:title"
          content="Anand Krishnan M J Portfolio - Full Stack Developer"
        />
        <meta
          property="og:description"
          content="Anand Krishnan M J is a Full Stack Developer with expertise in React.js, Node.js, and Next.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.akmj.social" />
        <meta
          property="og:image"
          content="https://drive.google.com/uc?export=view&id=1jmAPu8YWqt5mSQFZLqDjeCThv-G0XG1z"
        />
        <meta
          property="og:image:alt"
          content="Anand Krishnan M J Portfolio - Full Stack Developer"
        />
        <meta
          name="twitter:title"
          content="Anand Krishnan M J Portfolio - Full Stack Developer"
        />
        <meta
          name="twitter:description"
          content="Anand Krishnan M J is a Full Stack Developer with expertise in React.js, Node.js, and Next.js."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://drive.google.com/uc?export=view&id=1jmAPu8YWqt5mSQFZLqDjeCThv-G0XG1z"
        />
        <link rel="canonical" href="https://www.akmj.social" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {isLoading && <Loading />}
      <Provider store={store}>
        {/* eslint-disable  */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
