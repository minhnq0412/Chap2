import React, { useState } from "react";
import { CaculatorWinner } from "../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CaculatorWinner(board);
  const handleClick = () => {};
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
    
    </div>
  );
};

export default Game;
