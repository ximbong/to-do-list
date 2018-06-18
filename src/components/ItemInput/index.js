import React from "react";

import "./index.css";

const ItemInput = ({ value, index, updateData, edit }) => {
  return (
    <input
      value={value}
      onChange={event => edit(event)}
      onBlur={event => updateData(event, index)}
      className="content"
      type="text"
      autoFocus
    />
  );
};

export default ItemInput;
