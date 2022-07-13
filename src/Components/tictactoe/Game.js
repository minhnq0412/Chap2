import React, { useReducer, useState } from "react";
import { CaculatorWinner } from "../helpers";
import Board from "./Board";
import "./GameStyles.css";

const Game = () => {
  //   // const [board, setBoard] = useState(Array(9).fill(null));
  //   // const [xIsNext, setXIsNext] = useState(true);

  //   // const [state,dispatch] = useReducer()
  //   const [state, setState] = useState({
  //     board: Array(9).fill(null),
  //     xIsNext: true,
  //     name: "minhnq",
  //   });

  //   const winner = CaculatorWinner(state.board);

  //   const handleClick = (index) => {
  //     const boardCoppy = [...state.board];
  //     if (winner || boardCoppy[index]) return;
  //     boardCoppy[index] = state.xIsNext ? "X" : "O";
  //     setState((pre) => ({
  //       ...pre,
  //       board: boardCoppy,
  //       xIsNext: !pre.xIsNext,
  //     }));
  //   };
  // console.log(state)
  return (
    <div style={{ padding: "0 20px" }}>
      {/* <Board cells={state.board} onClick={handleClick}></Board> */}
    </div>
  );
};

export default Game;
