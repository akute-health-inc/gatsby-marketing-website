import React from 'react'
import ContentSection from '../components/ContentSection'
import TeamBiosSection from '../components/TeamBiosSection'
import CtaSection from '../components/CtaSection'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

function AboutPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <ContentSection
        color="white"
        size="large"
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      />
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        // buttonOnClick={() => {
        //   router.push('/pricing')
        // }}
      />
      <Divider color="light" />
      <Footer
        color="white"
        size="medium"
        logo="https://uploads.divjoy.com/logo.svg"
        description="A short description of what you do here"
        copyright="© Company Name"
      />
    </>
  )
}

export default AboutPage
