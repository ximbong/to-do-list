import React from "react";

import "./index.css";

const OperationButtons = ({ markAllDone, clearCompleted }) => {
  return (
    <div className="operation">
      <div className="action" id="mark-all-done" onClick={markAllDone}>
        Mark All Done
      </div>
      <div className="action" id="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </div>
    </div>
  );
};

export default OperationButtons;
