import React from "react";

import "./index.css";

const ItemInfo = ({ handleClassName, toggleEditState, value }) => {
  return (
    //intentionally trigger the function
    <div className={handleClassName()} onClick={toggleEditState}>
      {value}
    </div>
  );
};

export default ItemInfo;
