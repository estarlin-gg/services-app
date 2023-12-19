import { Children } from "react";

export const Button = ({ text, onClick, classes }) => {
  return (
    <button className={`${classes}  rounded-lg`} onClick={onClick}>
      {text}
    </button>
  );
};
