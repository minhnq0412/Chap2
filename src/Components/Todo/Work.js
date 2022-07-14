import React from "react";

const Work = ({ value, onClick }) => {
  return (
    <div>
      <li>
        {value}
        <span onClick={onClick}>&times;</span>
      </li>
    </div>
  );
};

export default Work;
