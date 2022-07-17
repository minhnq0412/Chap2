import React from "react";
import { winner } from "../helpers";
import Cell from "./Cell";

const Board = ({ cells, onClick }) => {
  console.log(cells);
  return (
    <div className="game-board">
      {cells.map((o, i) => (
        <Cell key={i} value={o} onClick={() => onClick(i)}></Cell>
      ))}
    </div>
  );
};

export default Board;
