import React from "react";
import Section from "./../Section";
import Features2 from "./../Features2";
import "./styles.scss";

function FeaturesSection2(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <Features2
          items={[
            {
              title: "Have fun!",
              subtitle:
                "We've gamified everything so you feel like you're having fun when you're actually doing free work for us. Win win!",
              iconClass: "fas fa-gem",
              iconColor: "warning"
            },
            {
              title: "Charge up",
              subtitle:
                "If you want to keep having fun remember to stay charged! And by that we mean you need to buy our ERC-20 CHARGE token to keep playing.",
              iconClass: "fas fa-charging-station",
              iconColor: "danger"
            },
            {
              title: "Pick your flavor",
              subtitle:
                "Dark mode is so last year. We have a light mode and turquoise mode. Either way, your eyes are going to hurt. Don't forget to stay charged!",
              iconClass: "fas fa-adjust",
              iconColor: "primary"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection2;
