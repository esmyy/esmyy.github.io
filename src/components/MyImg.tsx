import React from "react";
import { FC } from "react";

export const MyImg: FC<{
  src: string;
  alt: string;
  width?: string;
  height?: string;
}> = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
      }}
    />
  );
};
