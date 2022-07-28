import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
import useHackerNewApi from "../../hook/useHackerNewApi";
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

const HackerNewWithHook = () => {
  const { query, setQuery, loading, errorMessage, setUrl, data } =
    useHackerNewApi(`https://hn.algolia.com/api/v1/search?query=''`,{hits:[]});

    console.log(data)
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
          defaultValue={query}
          placeholder="Typing your keyword..."
          onChange={(e) => setQuery(e.target.value)}
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
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
        >
          Fetching
        </button>
      </div>
      {loading && <div>loading...</div>}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((o, i) => {
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

export default HackerNewWithHook;
