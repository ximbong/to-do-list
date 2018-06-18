import React from "react";

import "./index.css";

const ItemCheckBox = ({ updateStatus, index, checked }) => {
  return (
    <label className="label">
      <input
        type="checkbox"
        onChange={event => updateStatus(event, index)}
        checked={checked}
      />
      <span className="checkmark" />
    </label>
  );
};

export default ItemCheckBox;
