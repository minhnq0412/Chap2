import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import lodash from "lodash";
// https://hn.algolia.com/api/v1/search?query=react;

const HackerNew = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("react");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const handleFetchData = useRef({});
  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const respone = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(respone.data?.hits || []);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setErrorMessage(`The error happend ${err}`);
    }
  };
  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => handleFetchData.current, [query]);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        margin: "0 auto",
        marginTop: "20px",
        padding: "20px",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0)",
      }}
    >
      <input
        type="text"
        style={{ borderColor: "rgb(34 197 94)", color: "black" }}
        defaultValue={query}
        onChange={handleUpdateQuery}
      ></input>
      {loading && <div>loading...</div>}
      {!loading && errorMessage && <p>{errorMessage}</p>}
      {!loading &&
        hits.length > 0 &&
        hits.map((o, i) => <h3 key={i}>{o.title}</h3>)}
    </div>
  );
};

export default HackerNew;
