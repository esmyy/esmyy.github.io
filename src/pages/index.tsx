import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import { FirstScreen } from "../components/home/FirstScreen";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={"esmyy, 马月月，前端技术手册，vue 源码，React 源码"}
    >
      <main>
        <FirstScreen />
      </main>
      <footer></footer>
    </Layout>
  );
}
