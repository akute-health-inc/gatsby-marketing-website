import React from 'react'
import Section from './../Section'
import SectionHeader from './../SectionHeader'
import Features from './../Features'
import './styles.scss'
import Img from 'gatsby-image'

function FeaturesSection(props) {
  const features = props.features
  const images = props.images
  let items = []
  features.forEach((feature, index) => {
    items.push({
      title: feature.title,
      body: feature.subtitle,
      image: images[index].fluid.src,
    })
  })
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        {/* <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        /> */}
        <div className="FeaturesSection__box box">
          <Features columns={3} items={items} />
        </div>
      </div>
    </Section>
  )
}

export default FeaturesSection
