import React from 'react'
import Section from './../Section'
import SectionHeader from './../SectionHeader'
import Testimonials from './../Testimonials'
import './styles.scss'

function TestimonialsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Testimonials
          items={[
            {
              avatar:
                'https://cdn.membershipworks.com/u/5bfb4a97f033bf2b52209c08_lgl.jpg?1543358867',
              name: 'Dr. Jack Forbush, DO',
              quote:
                'I’ve been working with AkuteHealth and must say that the developer has some fantastic ideas and plans for the product. They just released a video showing the e-prescribing integration which looks incredibly user-friendly! AkuteHealth is going to be very disruptive (in a good way!)',
              company: 'Osteopathic Center for Family Medicine',
            },
            // {
            //   avatar: "https://uploads.divjoy.com/pravatar-150x-48.jpeg",
            //   name: "Shawna Murray",
            //   quote:
            //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
            //   company: "Company"
            // },
            // {
            //   avatar: "https://uploads.divjoy.com/pravatar-150x-12.jpeg",
            //   name: "Blake Elder",
            //   quote:
            //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
            //   company: "Company"
            // }
          ]}
        />
      </div>
    </Section>
  )
}

export default TestimonialsSection
