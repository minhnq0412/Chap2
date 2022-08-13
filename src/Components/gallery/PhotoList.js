import React from "react";
import { useGallery } from "../contexts/galleryContext";
import PropTypes from "prop-types";

const PhotoList = () => {
  const { photos, toogleLike } = useGallery();
  return (
    <div className="py-10 px-5">
      <div className="grid grid-cols-4 gap-5">
        {photos &&
          photos.length > 0 &&
          photos.map((o) => (
            <PhotoItem key={o.id} info={o} toogleLike={toogleLike}></PhotoItem>
          ))}
      </div>
    </div>
  );
};
const PhotoItem = ({ info: { id, url, isLike }, toogleLike }) => {
  return (
    <div className="relative h-[200px] group">
      <img alt="" src={url} className="w-full h-full object-cover"></img>
      <span className="absolute right-5 top-5 z-10 cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <img
          src={isLike ? "/icon-heart.png" : "/heart-dis.png"}
          alt="heart"
          style={{ width: "24px" }}
          onClick={() => toogleLike(id)}
        />
      </span>
      <button
        className="py-2 px-6 text-sm font-medium bg-white rounded-lg text-black
       absolute bottom-5 left-2/4 -translate-x-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
      >
        Add
      </button>
    </div>
  );
};

PhotoItem.propTypes = {
  url: PropTypes.string,
};

export default PhotoList;
