import React, { useReducer } from "react";
import Work from "./Work";

const initState = {
  work: "",
  works: [],
};
const SET_WORK = "set_work";
const ADD_WORK = "add_work";
const DELETE_WORK = "delete_work";

const setWork = (payload) => ({
  type: SET_WORK,
  payload,
});
const addWork = (payload) => ({
  type: ADD_WORK,
  payload,
});
const deleteWork = (payload) => ({
  type: DELETE_WORK,
  payload,
});

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_WORK:
      return {
        ...state,
        work: action.payload,
      };
    case ADD_WORK:
      state.works.includes(state.work) || state.works.push(state.work);
      return {
        ...state,
      };
    case DELETE_WORK:
      state.works.splice(action.payload, 1);
      return {
        ...state,
      };
    default:
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { work, works } = state;
  return (
    <div>
      <h3>TODO</h3>
      <input
        placeholder="Enter TODO..."
        value={work}
        onChange={(e) => dispatch(setWork(e.target.value))}
      ></input>
      <button onClick={() => dispatch(addWork(""))}>ADD</button>
      {works.map((o, i) => (
        <Work key={i} value={o} onClick={() => dispatch(deleteWork(i))} />
      ))}
    </div>
  );
};

export default Todo;
