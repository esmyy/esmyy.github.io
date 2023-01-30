import React from "react";
import styles from "./RenderFlow.module.css";
const stepsMap = {
  repaint: [
    {
      name: "DOM",
      type: "default",
    },
    {
      name: "Style",
      type: "danger",
    },
    {
      name: "Layout",
      type: "grey",
    },
    {
      name: "Layer",
      type: "grey",
    },
    {
      name: "Paint",
      type: "danger",
    },
    {
      name: "Composite",
      type: "danger",
    },
  ],
  reflow: [
    {
      name: "DOM",
      type: "default",
    },
    {
      name: "Style",
      type: "danger",
    },
    {
      name: "Layout",
      type: "danger",
    },
    {
      name: "Layer",
      type: "danger",
    },
    {
      name: "Paint",
      type: "danger",
    },
    {
      name: "Composite",
      type: "danger",
    },
  ],
  default: [
    {
      name: "DOM",
      type: "default",
    },
    {
      name: "Style",
      type: "default",
    },
    {
      name: "Layout",
      type: "default",
    },
    {
      name: "Layer",
      type: "default",
    },
    {
      name: "Paint",
      type: "default",
    },
    {
      name: "Composite",
      type: "default",
    },
  ],
};

export const RenderFlow: React.FC<{
  type?: "repaint" | "reflow" | "default";
}> = ({ type = "default" }) => {
  const steps = stepsMap[type];
  return (
    <div className={styles.wrapper}>
      {steps.map((s, index) => {
        return (
          <span key={s.name}>
            <span className={`${styles.step} ${styles[s.type]}`}>{s.name}</span>
            {index === steps.length - 1 ? null : " -> "}
          </span>
        );
      })}
    </div>
  );
};
