export const YoutubeItem = (props) => {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt=""></img>
      </div>
      <div className="youtube-footer">
        <img src={props.image_avatar} alt="" className="youtube-avatar"></img>
        <div className="youtube-info">
          <h3 className="youtube-tittle">{props.tittle}</h3>
          <h4 className="youtube-author">{props.author}</h4>
        </div>
      </div>
    </div>
  );
};
