import React, { useEffect, useRef, useState } from "react";
import "./Create.css";
import { data } from "../../data";

const Create = ({ onClick }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [heart, setHeart] = useState("");
  const [viewer, setViewer] = useState("");
  const [image, setImage] = useState("");
  const [image_avatar, setImageAvatar] = useState("");

  const handleClick = () => {
    const id = Math.floor(Math.random() * 10000000);
    const item = { id, title, author, heart, viewer, image, image_avatar };
    onClick(item);
  };

  const clickRef = useRef();
  useEffect(() => {
    const element = clickRef.current;

    if (element) {
      element.addEventListener("click", handleClick);
    }

    return () => element.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="create">
      <div className="form">
        <h2>Thêm mới</h2>
        <div className="item">
          <label>Tiêu đề:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            required
          ></input>
        </div>
        <div className="item">
          <label>Tác giả:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <div className="item">
          <label>Cảm xúc:</label>
          <input
            type="number"
            required
            value={heart}
            onChange={(e) => setHeart(e.target.value)}
          ></input>
        </div>
        <div className="item">
          <label>Lượt xem:</label>
          <input
            type="number"
            required
            value={viewer}
            onChange={(e) => setViewer(e.target.value)}
          ></input>
        </div>
        <div className="item">
          <label>Đường dẫn ảnh nền:</label>
          <textarea
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></textarea>
        </div>
        <div className="item">
          <label>Đường dẫn ảnh tác giả:</label>
          <textarea
            value={image_avatar}
            onChange={(e) => setImageAvatar(e.target.value)}
          ></textarea>
        </div>
        <button ref={clickRef}>Thêm</button>
      </div>
    </div>
  );
};

export default Create;
