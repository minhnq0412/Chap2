import React, { useEffect, useRef, useState } from "react";
//https://picsum.photos/v2/list
//https://picsum.photos/v2/list?page=2&limit=100
import "./photos.css";
import axios from "axios";

const getRandomPhotos = async (page) => {
  try {
    const respone = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=8`
    );
    return respone.data;
  } catch (err) {
    console.log(err);
  }
};

const Photos = () => {
  const [randomPhotos, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const handleLoadMorePhotos = useRef({});
  handleLoadMorePhotos.current = async () => {
    const images = await getRandomPhotos(nextPage);
    const newPhotos = [...randomPhotos, ...images];
    setRandomPhoto(newPhotos);
    setNextPage(nextPage + 1);
  };
  useEffect(() => handleLoadMorePhotos.current, []);

  return (
    <div>
      <div className="grid-layout">
        {randomPhotos.length > 0 &&
          randomPhotos.map((o) => (
            <div className="grid-item" key={o.id}>
              <img
                src={o.download_url}
                alt={o.tittle}
                style={{ height: "200px" }}
              />
            </div>
          ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn-loadmore" onClick={handleLoadMorePhotos.current}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
