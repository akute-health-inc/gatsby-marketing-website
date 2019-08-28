import React from 'react'
import Section from './../Section'
import SectionHeader from './../SectionHeader'
import TeamBios from './../TeamBios'
import './styles.scss'

function TeamBiosSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <TeamBios people={props.data} />
      </div>
    </Section>
  )
}

export default TeamBiosSection
