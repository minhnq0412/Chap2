import React, { useReducer, useState } from "react";
import { ThemeProvider } from "styled-components";
import { data } from "../../data";
import Card from "../card/Card";
import CardList from "../card/CardList";
import Create from "../forminput/Create";
import { GlobalStyles } from "../GlobalStyle";

const theme = {
  colors: {
    blue: "#2979ff",
  },
};
const inititalState = {
  data: [],
  showForm: false,
  id: null,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "CREATE": {
      const data = [...(state.data || [])];
      data.push(action.payload);
      return { ...state, data, showForm: false };
    }

    case "UPDATE": {
      const data = [...(state.data || [])];
      const item = data.find((o) => o.id === action.payload.id);
      const newArr = data.reduce((acc, curr) => [
        ...acc,
        curr.id === item.id ? item : curr,
        [],
      ]);
      return { ...state, data: newArr, showForm: false };
    }

    case "SET_SHOW":
      return { ...state, showForm: true, id: action.payload };
    default:
      break;
  }
};

const Practice = () => {
  const [state, dispatch] = useReducer(Reducer, inititalState);
  const handleCreate = (obj) => {
    dispatch({
      type: "CREATE",
      payload: obj,
    });
  };
  const handleUpdate = (obj) => {
    console.log("update");
    dispatch({
      type: "UPDATE",
      payload: obj,
    });
  };
  const handleShow = (id) => {
    dispatch({
      type: "SET_SHOW",
      payload: id,
    });
  };
  console.log(state);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <button onClick={() => handleShow()}>Thêm</button>
        <CardList>
          {state?.data?.length > 0 &&
            state.data.map((o) => (
              <Card key={o.id} {...o} onClick={() => handleShow(o.id)}></Card>
            ))}
        </CardList>
        {state.showForm && (
          <Create onClick={state.id ? handleUpdate : handleCreate}></Create>
        )}
      </ThemeProvider>
    </div>
  );
};

export default Practice;
