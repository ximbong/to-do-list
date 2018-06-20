import React from "react";

import DisplayModeButtons from "../DisplayModeButtons";
import OperationButtons from "../OperationButtons";

import "./index.css";

const Footer = ({ length, handleFilter, markAllDone, clearCompleted }) => {
  return (
    <div className="info">
      <div className="quantity">{length} item(s) left</div>
      <DisplayModeButtons handleFilter={handleFilter} />
      <OperationButtons
        markAllDone={markAllDone}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};

export default Footer;
