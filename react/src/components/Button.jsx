import React from "react";

const Button = ({ text, color }) => {
  return (
    <>
      {/* {type === "primary" ? (
      ) : (
        <button className="bg-red-500 hover:bg-red-700">{text}</button>
        )} */}
      <button
        style={{ backgroundColor: color }}
        className={`hover:bg-${color}-700`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
