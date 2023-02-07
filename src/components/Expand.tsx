import React, { FC } from "react";

export const Expand: FC<{
  summary: string;
  text: string;
}> = ({ summary, text }) => {
  return (
    <details>
      <summary>{summary}</summary>
      <div>{text}</div>
    </details>
  );
};
