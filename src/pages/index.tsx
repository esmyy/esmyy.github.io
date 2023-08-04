import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const cover: any = siteConfig.customFields.cover;

  return (
    <Layout title={siteConfig.title} description={"esmyy，月月，冯朋"}>
      <main
        className={styles.firstScreen}
        style={{ color: cover.textColor || "#fff" }}
      >
        <div className={styles.links}>
          <a href="https://esmyy.notion.site/1fcedaf6ce0f45588622f3af34942f67?v=48f2c80169a042f5bbe3203d214d424e&pvs=4">
            说点东西 &gt;&gt;
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          {/* <a href="https://esmyy.notion.site/1fcedaf6ce0f45588622f3af34942f67?v=48f2c80169a042f5bbe3203d214d424e&pvs=4">
            说说 &gt;&gt;
          </a> */}
        </div>

        <div className={styles.pictureWrapper}>
          <img
            src={require("@site/static/img/esmyy.png").default}
            className={styles.avatar}
            alt="esmyy"
          />
          <div className={styles.pictureInfo}>
            <p>{cover.description}</p>
            <p>{cover.date}</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
