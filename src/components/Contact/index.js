import React from 'react'
import ContactForm from './../ContactForm'
// import contact from './../../util/contact.js'
import './styles.scss'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: null,
    }

    this.setStatus = this.setStatus.bind(this)
  }

  setStatus = status => {
    this.setState({
      status: status,
    })
  }

  onSubmit = ({ name, email, message }) => {
    this.setStatus({ type: 'pending' })

    // contact.submit({ name, email, message }).then(() => {
    //   this.setStatus({
    //     type: 'success',
    //     message: "Your message has been sent! We'll get back to you soon.",
    //   })
    // })
  }

  render() {
    return (
      <ContactForm
        parentColor={this.props.parentColor}
        showNameField={this.props.showNameField}
        buttonText={this.props.buttonText}
        onSubmit={this.onSubmit}
        status={this.state.status}
      />
    )
  }
}

export default Contact
