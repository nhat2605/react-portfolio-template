import React from "react";

const ExampleCard = ({ url, handleClick }) => {
  return (
    <div
      className="cursor-pointer hover:scale-105 rounded-lg transition-all ease-out duration-300"
      onClick={() => handleClick(url)} // Update here to ensure the function is called on click
    >
      <img
        className="object-cover rounded-lg transition-all ease-out duration-300"
        style={{ maxHeight: '20vh', width: 'auto', height: 'auto' }}
        src={url}
        alt="Descriptive text"
      />

    </div>
  );
};

export default ExampleCard;
