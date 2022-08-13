import { createContext, useContext, useState } from "react";
const examData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1657299170936-0531a116c87c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    isLike: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1660276418962-dda64ddd6fb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    isLike: true,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1660296445573-7d08f5842f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    isLike: true,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1657299142997-cb45f5dfa9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    isLike: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1660208024980-1893964f52b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    isLike: true,
  },
];

const GalleryContext = createContext();
const GalleryProvider = (props) => {
  const [photos, setPhotos] = useState(examData);
  const [cardItems, setCardItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  const toogleLike = (id) => {
    const updateArr = photos.map((o) => {
      if (o.id === id) o.isLike = !o.isLike;
      return o;
    });
    setPhotos(updateArr);
  };

  const value = {
    photos,
    setPhotos,
    cardItems,
    setCardItems,
    favoriteList,
    setFavoriteList,
    toogleLike,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};
const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
};

export { GalleryProvider, useGallery };
