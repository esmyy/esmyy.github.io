import React from "react";

export const Hidden: React.FC<{
  text: string;
  link: string;
}> = ({ text, link }) => {
  return link ? (
    <a className="link hidden" href={link}>
      {text}
    </a>
  ) : (
    <span>{text}</span>
  );
};
