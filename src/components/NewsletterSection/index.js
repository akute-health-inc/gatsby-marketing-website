import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Newsletter from "./../Newsletter";
import "./styles.scss";

function NewsletterSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <div className="NewsletterSection__form-container">
          <Newsletter
            parentColor={props.color}
            buttonText={props.buttonText}
            inputPlaceholder={props.inputPlaceholder}
            subscribedMessage={props.subscribedMessage}
            size="medium"
          />
        </div>
      </div>
    </Section>
  );
}

export default NewsletterSection;
