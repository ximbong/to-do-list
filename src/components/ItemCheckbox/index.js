import React from "react";

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
