import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
  //
  // const cells = [null, null, null, "Y", "X", "X", null, null, null];
  // console.log();

  return (
    <div className="game-board">
      {cells.map((o, i) => (
        <Cell
          key={i}
          value={o}
          onClick={() => {
            onClick(i);
          }}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
