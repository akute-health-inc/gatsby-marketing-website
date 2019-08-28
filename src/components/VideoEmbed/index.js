import React from "react";
import "./styles.scss";

function VideoEmbed(props) {
  return (
    <div className="VideoEmbed">
      <iframe
        className="VideoEmbed__frame"
        src={props.url}
        allowfullscreen={true}
        frameBorder={0}
      />
    </div>
  );
}

export default VideoEmbed;
