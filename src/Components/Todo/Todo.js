import React, { useReducer } from "react";
import Work from "./Work";

const initWork = {
  work: "",
  works: [],
};

const reducer = (state, action) => {
    console.log(state.work)

  switch (action) {
    case "Add":
        console.log(state.work)
    //   state.works.includes(`${state.work}`) || state.works.push(state.work);
      break;
    // case "Delete":
    //     state.works.includes(`${state.work}`) && state.works.push(state.work);
    //   break;
    default:
  }
};

const Todo = () => {

  const [state, dispatch] = useReducer(reducer, initWork);

  return (
    <div>
      <h3>TODO</h3>
      <input placeholder="Enter TODO..."></input>
      <button onClick={() => dispatch("Add")}>ADD</button>
      {state.works.map((o, i) => (
        <Work key={i} value={o.name} index={o.id} />
      ))}
    </div>
  );
};

export default Todo;
