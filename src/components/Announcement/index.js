import React from "react";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function Announcement(props) {
  return (
    <div
      className={
        "message is-marginless" +
        (props.color ? ` is-${props.color}` : "") +
        (props.size ? ` is-${props.size}` : "")
      }
    >
      <div className="Announcement__message-header message-header is-radiusless">
        <div className="Announcement__text">{props.text}</div>
        <SectionButton
          parentColor={props.color}
          size={props.size}
          onClick={props.buttonOnClick}
        >
          {props.buttonText}
        </SectionButton>
      </div>
    </div>
  );
}

export default Announcement;
