import React, { useState, useEffect } from "react";

const Selector = ({ title, options, clearFilter }) => {
  const [name, setName] = useState();

  useEffect(() => {
    console.log("again call");
    setName("");
  }, [clearFilter]);

  return (
    <div class="radio-toolbar my-2">
      <div className="d-flex align-items-center mb-2">
        <span className="font-weight-bolder mr-1">{title}:</span>
        <span>{name}</span>
      </div>
      {options.map((option, index) => (
        <span className="mr-2">
          <input
            type="radio"
            id={index + option}
            name={title}
            value={option}
            checked={name === option}
            onChange={(e) => setName(e.target.value)}
          />
          <label for={index + option}>{option}</label>
        </span>
      ))}
    </div>
  );
};

export default Selector;
