import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import useDebounce from "../../hook/useDebounce";
// https://api.themoviedb.org/3/movie/550?api_key=95f2419536f533cdaa1dadf83c606027
// https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=''
const Movie = styled.div`
  padding: 40px;
  .input {
    width: 100%;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 80px;
    input {
      width: 100%;
      padding: 20px;
      border: 1px solid #9f7aea;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 0px 2px rgba(125, 106, 225, 0.2);
    }
  }
  .listImage {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
`;

const MovieSearchApp = () => {
  const handleFetchData = useRef({});
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState();

  const queryDebounce = useDebounce(query, 1000);

  handleFetchData.current = async () => {
    try {
      const respone = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query='${queryDebounce}'`
      );
      if (respone.data.results) setMovies(respone.data.results);
    } catch (err) {}
  };

  useEffect(() => {
    handleFetchData.current();
  }, [queryDebounce]);

  return (
    <Movie>
      <div className="input">
        <input
          type="text"
          name="fullname"
          placeholder="Search movie..."
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <div className="listImage">
        {movies &&
          movies.length > 0 &&
          movies.map((o) => <MovieItem key={o.id} data={o}></MovieItem>)}
      </div>
    </Movie>
  );
};

const MovieItem = ({ data }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "0.75rem",
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ height: "297px" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
          src={
            data.poster_path &&
            `https://image.tmdb.org/t/p/original${data.poster_path}`
          }
          alt=""
        />
      </div>
      <div
        style={{
          padding: "28px",
          flex: "1",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            color: "black",
            fontWeight: "600px",
            marginBottom: "16px",
          }}
        >
          {data.title}
        </h3>
        <p
          style={{
            color: "#999",
            fontSize: "0.875rem",
            lineHeight: "2rem",
            marginBottom: "24px",
          }}
        >
          {data.overview}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            columnGap: "0.75rem",
            marginTop: "auto",
          }}
        >
          <img src="/icon-heart.png" alt="heart" style={{ width: "16px" }} />
          <span
            style={{
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {data.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieSearchApp;
