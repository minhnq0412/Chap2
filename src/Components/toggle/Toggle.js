import React, { useState } from "react";
import "./ToggleStyles.css";
const Toggle = () => {
  // const array = useState(false);
  const [on, setOn] = useState(false);
  return (
    <div>
      <div
        className={`toggle ${on ? "active" : ""}`}
        onClick={() => setOn(!on)}
      >
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Toggle;
