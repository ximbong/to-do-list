import React from "react";

import DisplayModeButtons from "../DisplayModeButtons";
import OperationButtons from "../OperationButtons";

const Footer = ({ length, filter }) => {
  return (
    <div className="info">
      <div className="quantity">{length} items left</div>
      <DisplayModeButtons filter={this.filter} />
      <OperationButtons />
    </div>
  );
};

export default Footer;
