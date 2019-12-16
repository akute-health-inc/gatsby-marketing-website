import React from 'react'
import PricingSection from '../components/PricingSection'
import FaqSection from '../components/FaqSection'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

function PricingPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <PricingSection color="white" size="medium" title="Pricing" subtitle="" />
      <FaqSection
        color="white"
        size="medium"
        title="Frequently Asked Questions"
        subtitle=""
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

export default PricingPage
