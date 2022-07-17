import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
<<<<<<< HEAD
  console.log(cells);
=======
  //
  // const cells = [null, null, null, "Y", "X", "X", null, null, null];
  // console.log();

>>>>>>> 1078009f527bc3613ba8bad28044850c763fcc84
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
