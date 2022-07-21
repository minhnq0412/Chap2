import React, { useEffect, useState } from "react";
//https://picsum.photos/v2/list
//https://picsum.photos/v2/list?page=2&limit=100
import "./photos.css";
import axios from "axios";

const getRandomPhotos = (page) => {
  return axios
    .get(`https://picsum.photos/v2/list?page=${page}&limit=8`)
    .then((respone) => respone.data)
    .catch((err) => {
      console.log(err);
    });
};

const Photos = () => {
  const [randomPhotos, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);
  const [ip,setIp] = useState("");
  useEffect(() => handleLoadMorePhotos, []);

  const handleLoadMorePhotos = () => {
    getRandomPhotos(nextPage).then((images) => {
      setRandomPhoto(images);
      setNextPage(nextPage + 1);
    });
  };

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
        <button className="btn-loadmore" onClick={handleLoadMorePhotos}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
