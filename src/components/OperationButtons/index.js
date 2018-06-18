import React from "react";

const OperationButtons = () => {
  return (
    <div className="operation">
      <div className="action" id="mark-all-done">
        Mark All Done
      </div>
      <div className="action" id="clear-completed">
        Clear Completed
      </div>
    </div>
  );
};

export default OperationButtons;
