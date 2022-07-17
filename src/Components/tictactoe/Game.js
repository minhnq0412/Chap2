import React, { useReducer, useState } from "react";
import { CaculatorWinner } from "../helpers";
import Board from "./Board";
import "./GameStyles.css";

const initState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      const nextState = JSON.parse(JSON.stringify(state));
      if (winner || board[index]) return state;
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    case "RESET":
      return action.defaultData;

    default:
  }
};
const Game = () => {
<<<<<<< HEAD
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
=======
  const [state, dispatch] = useReducer(reducer, initState);
  const winner = CaculatorWinner(state.board);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleReset = () => {
    dispatch({
      type: "RESET",
      defaultData: initState,
    });
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div style={{ padding: "0 20px" }}>
        <button onClick={handleReset}>Reset Game</button>
      </div>
>>>>>>> 1078009f527bc3613ba8bad28044850c763fcc84
    </div>
  );
};

export default Game;
