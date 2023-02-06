import React, { FC } from "react";

export const Link: FC<{
  href: string;
  text: string;
  target: "_blank" | "self";
}> = ({ href, target, text = href }) => {
  return (
    <a target={target} href={href}>
      {text}
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 5L10 5C8.89543 5 8 5.89543 8 7L8 41C8 42.1046 8.89543 43 10 43L38 43C39.1046 43 40 42.1046 40 41L40 24.75"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M28 5H40V17"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M21.0001 23.9998L39 6"
          stroke="#333"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
};
