import React from "react";

import "./index.css";

const FooterRadioButton = ({ id, changeID, selected_id }) => {
  return (
    <div className="category">
      <input
        type="radio"
        id={id}
        value={id}
        checked={selected_id === id}
        onChange={changeID}
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};

export default FooterRadioButton;
