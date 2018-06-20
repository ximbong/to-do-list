import React from "react";

import "./index.css";

const ItemInput = ({ value, index, updateData, edit, handleKeyPress }) => {
  return (
    <input
      value={value}
      onChange={edit}
      onKeyPress={event => handleKeyPress(event, index)}
      onBlur={event => updateData(event, index)}
      className="content"
      type="text"
      autoFocus
    />
  );
};

export default ItemInput;
