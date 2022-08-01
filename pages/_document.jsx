import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* from a cdn */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Fredericka+the+Great&family=Roboto+Flex:opsz,wght@8..144,400;8..144,600&display=swap"
            rel="stylesheet"
          />
          {/* from a downloaded file */}
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-Regular.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
          <link
            rel="preload"
            href="/fonts/IBMPlexSans-SemiBold.ttf"
            as="font"
            crossOrigin="anonymous"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
