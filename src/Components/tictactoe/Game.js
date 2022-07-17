import React, { useState } from "react";
import { CaculatorWinner } from "../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = CaculatorWinner(board);
  const handleClick = (index) => {
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    boardCoppy[index] = xIsNext ? "X" : "O";
    setBoard(boardCoppy);
    setXIsNext(!xIsNext);

  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      {winner ? `Winner is ${xIsNext ? "O" : "X"}` : ""}
    </div>
  );
};

export default Game;
