import React, { useState } from "react";
const SortSelection = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className="sortSelection"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option
          className="sortSelection-option"
          key={option.value}
          value={option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default SortSelection;
