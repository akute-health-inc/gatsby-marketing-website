import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import ContentCards from "./../ContentCards";
import "./styles.scss";

function ContentCardsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <ContentCards
          people={[
            {
              image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/golden-gate"
            },
            {
              image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/beach"
            },
            {
              image: "https://source.unsplash.com/3XN-BNRDUyY/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/road"
            },
            {
              image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
              title: "Faucibus turpis in",
              body:
                "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
              url: "/post/ballons"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ContentCardsSection;
