import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const cover: any = siteConfig.customFields.cover;

  return (
    <Layout
      title={siteConfig.title}
      description={
        "esmyy，月月，马月月，冯朋，二水马月月，月月的博客，冯朋的博客"
      }
    >
      <main
        className={styles.firstScreen}
        style={{ color: cover.textColor || "#fff" }}
      >
        <div className={styles.introCard}>
          <img
            src={require("@site/static/img/esmyy.png").default}
            className={styles.avatar}
            alt="esmyy"
          />
          <div className={styles.selfIntro}>
            <p className={styles.summary}>月月，程序员</p>
            <p className={styles.summary}>懂些许技术，有一点有趣</p>
          </div>
          <div className={styles.links}>
            <a href="https://www.notion.so/esmyy/12bd8c446663473d9ce89c02764b9306?v=025d5de7572f4d848f77900c598123cf">
              💬 说说
            </a>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a href="https://www.notion.so/esmyy/esmyy-3007a97f0c8d427fbd3393714580dd13">
              📚 博客
            </a>
          </div>
        </div>

        <div className={styles.pictureIntroduction}>
          <p className={styles.descLine}>{cover.description}</p>
          <p className={styles.descLine}>{cover.date}</p>
        </div>
      </main>
    </Layout>
  );
}
