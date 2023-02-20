import clsx from "clsx";
import React, { FC } from "react";
import styles from "./Entries.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "技术手册",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    link: "/todo",
    description: (
      <>
        技术点研究，专题文档，工具库，实践方案等。
        梳理知识，构建技术体系，做一次有效的学习整理，避免无效的重复。温故知新，做到心中有数。
      </>
    ),
  },
  {
    title: "生活随笔",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    link: "/blog",
    description: (
      <>
        记录生活的一些思考和体会，练习和发展表达的能力。发现美好，分享美好，创造美好，成为美好。
      </>
    ),
  },
  {
    title: "more",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    link: "/blog",
    description: <>todo</>,
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  const enter = () => {
    window.location.href = link;
  };
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 onClick={enter} className={styles.link}>
          {title}
        </h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

export const Entries: FC<{
  mode: "inside" | "outside";
}> = ({ mode = "outside" }) => {
  return (
    <section className={`${styles.features} ${styles[mode]}`}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
