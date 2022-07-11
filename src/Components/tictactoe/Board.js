import React from "react";
import Cell from "./Cell";
import "./GameStyles.css"

const Board = () => {
  return (
    <div className="game-board">
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
    </div>
  );
};

export default Board;
