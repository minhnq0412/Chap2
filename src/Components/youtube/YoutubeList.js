import { YoutubeItem } from "./YoutubeItem";
import { data } from "../../data";

export const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {/* Children Component*/}
      {data.map((o) => (
        <YoutubeItem
          key={o.id}
          image={o.image}
          image_avatar={o.image_avatar}
          tittle={o.tittle}
          author={o.author}
        ></YoutubeItem>
      ))}
    </div>
  );
};
