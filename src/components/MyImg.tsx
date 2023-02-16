import React, { FC } from "react";

export const MyImg: FC<{
  src: string | { default: string };
  alt: string;
  width?: string;
  height?: string;
}> = ({ src, alt, width, height }) => {
  return (
    <img
      src={typeof src === "string" ? src : src.default}
      alt={alt}
      style={{
        width,
        height,
      }}
    />
  );
};
