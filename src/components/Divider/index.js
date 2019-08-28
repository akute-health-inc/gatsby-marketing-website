import React from "react";
import "./styles.scss";

function Divider(props) {
  return <div className={`Divider has-background-${props.color}`} />;
}

export default Divider;
