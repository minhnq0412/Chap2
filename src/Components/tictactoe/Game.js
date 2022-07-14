import React, { useReducer, useState } from "react";
import { CaculatorWinner } from "../helpers";
import Board from "./Board";
import "./GameStyles.css";

const initState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
const reducer = (state, action) => {
  console.log(state);
  switch (action) {
    case "CLICK":
      break;

    default:
      break;
  }
  return state;
};
const Game = () => {

  const [state, dispatch] = useReducer(reducer, initState);
  const { board, xIsNext } = initState;

  const winner = CaculatorWinner(board);

  const handleClick = (index) => {
    const boardCoppy = [...board];
    if (winner || boardCoppy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
      },
    });
  };
  return (
    <div style={{ padding: "0 20px" }}>
      <Board cells={state.board} onClick={handleClick}></Board>
    </div>
  );
};

export default Game;
