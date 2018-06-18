import React from "react";

const ItemCheckBox = ({ updateStatus, index }) => {
  return (
    <label className="label">
      <input type="checkbox" onChange={event => updateStatus(event, index)} />
      <span className="checkmark" />
    </label>
  );
};

export default ItemCheckBox;
