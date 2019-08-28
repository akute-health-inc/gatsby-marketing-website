import React from "react";
import Section from "./../Section";
import "./styles.scss";

function StatsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <nav className="StatsSection__level level">
        {props.items.map((item, index) => (
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">{item.title}</p>
              <p className="title">{item.stat}</p>
            </div>
          </div>
        ))}
      </nav>
    </Section>
  );
}

export default StatsSection;
