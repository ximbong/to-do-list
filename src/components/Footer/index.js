import React from "react";

import DisplayModeButtons from "../DisplayModeButtons";
import OperationButtons from "../OperationButtons";

const Footer = ({ length, handleFilter, markAllDone, clearCompleted }) => {
  return (
    <div className="info">
      <div className="quantity">{length} items left</div>
      <DisplayModeButtons handleFilter={handleFilter} />
      <OperationButtons
        markAllDone={markAllDone}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default Footer;
