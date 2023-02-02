import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React, { FC } from "react";
import { Entries } from "./Entries";
import styles from "./FirstScreen.module.css";

export const FirstScreen: FC<{}> = ({}) => {
  const { siteConfig } = useDocusaurusContext();
  const cover: any = siteConfig.customFields.cover;
  return (
    <div>
      <div
        className={styles.firstScreen}
        style={{ color: cover.textColor || "#fff" }}
      >
        <div className={styles.lifeCard}>
          {/* <p>发现，分享，创造，成为美好。</p> */}
          <p>当一种美，美得让我觉得无福消受时，我便感受到了自己的局限</p>
        </div>
        <div className={styles.pictureIntroduction}>
          <p className={styles.descLine}>{cover.description}</p>
          <p className={styles.descLine}>{cover.date}</p>
        </div>
        <div className="scrollDownWrapper" id="scrollDownWrapper">
          <div className="scrollDown"></div>
        </div>

        <div className={styles.entriesInsideWrapper}>
          <Entries mode="inside" />
        </div>
      </div>

      <div className={styles.entriesOutsideWrapper}>
        <Entries mode="outside" />
      </div>
    </div>
  );
};
