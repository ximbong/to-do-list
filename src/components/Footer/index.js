import React from "react";

import DisplayModeButtons from "../DisplayModeButtons";
import OperationButtons from "../OperationButtons";

const Footer = ({ length, handleFilter }) => {
  return (
    <div className="info">
      <div className="quantity">{length} items left</div>
      <DisplayModeButtons handleFilter={handleFilter} />
      <OperationButtons />
    </div>
  );
};

export default Footer;
