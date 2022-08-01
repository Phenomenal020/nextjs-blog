import Head from "next/head";
import Layout from "../ccomponents/layout";
import Hero from "../ccomponents/hero/hero";
import WhyUs from "../ccomponents/whyUs/whyUs";
import ReadyToCreateCv from "../ccomponents/readyToCreateCv/readyToCreateCv";
import CVContents from "../ccomponents/cv_contents/CVContents";

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.appContainer}>
        <Head>
          <title>CV Builder</title>
          <meta
            name="description"
            content="CV Builder app from resumes and Cvs"
          />
        </Head>
        <div>
          <Hero />
          <WhyUs />
          <ReadyToCreateCv />
          <CVContents />
        </div>
      </div>
    </Layout>
  );
}
