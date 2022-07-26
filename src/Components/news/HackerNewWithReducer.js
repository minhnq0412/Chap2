import React, { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react;
const styleInput = {
  borderColor: "rgb(229 231 235)",
  padding: "20px",
  width: "100%",
  borderRadius: "0.375rem",
  ":focus": {
    borderColor: "rgb(96 165 250)",
  },
};

const initialState = {
  hits: [],
  query: "",
  loading: false,
  url: `https://hn.algolia.com/api/v1/search?query=''`,
  errorMessage: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, hits: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SET_URL":
      return { ...state, url: action.payload };

    default:
      break;
  }
};

const HackerNewWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    try {
      const respone = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: respone.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    } catch (err) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error happend ${err}`,
      });
    }
  };
  useEffect(() => {
    console.log(state.url)
    handleFetchData.current();
  }, [state.url]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        margin: "0 auto",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0)",
      }}
    >
      <div
        style={{ display: "flex", marginBottom: "20px", columnGap: "1.25rem" }}
      >
        <input
          type="text"
          style={styleInput}
          defaultValue={state.query}
          placeholder="Typing your keyword..."
          onChange={(e) =>
            dispatch({ type: "SET_QUERY", payload: e.target.value })
          }
        ></input>
        <button
          style={{
            backgroundColor: "rgb(59 130 246)",
            color: "white",
            fontWeight: "600px",
            padding: "20px",
            borderRadius: "0.5rem",
          }}
          onClick={() =>
            dispatch({
              type: "SET_URL",
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
        >
          Fetching
        </button>
      </div>
      {state.loading && <div>loading...</div>}
      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((o, i) => {
            if (!o.title || o.title.length <= 0) return null;
            return (
              <h3
                key={i}
                style={{
                  padding: "12px",
                  backgroundColor: "rgb(243 244 246)",
                  borderRadius: "0.5rem",
                }}
              >
                {o.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewWithReducer;
