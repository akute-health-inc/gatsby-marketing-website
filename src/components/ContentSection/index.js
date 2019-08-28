import React from 'react'
import Section from './../Section'
import SectionHeader from './../SectionHeader'
import './styles.scss'
import '../../css/fontStyle.css'

function ContentSection(props) {
  return (
    <div className="heroBackground">
      <Section
        color={props.color}
        size={props.size}
        backgroundImage={props.backgroundImage}
        backgroundImageOpacity={props.backgroundImageOpacity}
      >
        <div className="container">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            centered={true}
            size={2}
          />
        </div>
      </Section>
    </div>
  )
}

export default ContentSection
