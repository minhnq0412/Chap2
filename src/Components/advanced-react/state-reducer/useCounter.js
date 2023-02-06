import { useReducer } from "react";

const counterReducer = ({ count }, { type, payload }) => {
  switch (type) {
    case "increment":
      return { count: count + 1 };
    case "decrement":
      return { count: count - 1 };
    default:
      break;
  }
};
export default function useCounter(
  { initial = 0 } = {},
  reducer = counterReducer
) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initial });
  console.log(count);
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
  return { count, handleIncrement, handleDecrement };
}

useCounter.reducer = counterReducer;