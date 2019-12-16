import React from 'react'
import FeaturesSection2 from '../components/FeaturesSection2'
import ContentCardsSection from '../components/ContentCardsSection'
import CtaSection from '../components/CtaSection'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

function HowItWorksPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <FeaturesSection2
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
      />
      <ContentCardsSection
        color="white"
        size="medium"
        title="Featured Content"
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

export default HowItWorksPage
