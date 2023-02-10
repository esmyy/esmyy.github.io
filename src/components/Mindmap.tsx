import React, { FC } from "react";

export const Mindmap: FC<{
  chart: string;
}> = ({ chart }) => {
  return (
    <div className="mindmap" data-processed="true" data-mindmap-src={chart}>
      {chart}
    </div>
  );
};
