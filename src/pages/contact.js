import React from 'react'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Footer from '../components/Footer'

function ContactPage(props) {
  return (
    <>
      <Navbar
        color="white"
        spaced={true}
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <ContactSection
        color="white"
        size="medium"
        title="Contact Us"
        subtitle=""
        showNameField={true}
        buttonText="Send message"
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

export default ContactPage
