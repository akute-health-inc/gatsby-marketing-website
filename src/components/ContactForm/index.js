import React from 'react'
import FormStatus from './../FormStatus'
import FormField from './../FormField'
import SectionButton from './../SectionButton'
import './styles.scss'

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showErrors: false,
    }
    this.setName = this.setName.bind(this)
    this.setEmail = this.setEmail.bind(this)
    this.setMessage = this.setMessage.bind(this)
    this.setShowErrors = this.setShowErrors.bind(this)
  }

  // Error array we'll populate
  errors = []

  // Function for fetching error for a field
  getError = field => {
    return this.errors.find(e => e.field === field)
  }

  // Function to see if field is empty
  isEmpty = val => {
    return val.trim() === ''
  }

  componentDidUpdate(props) {
    // Add error if email empty
    if (this.isEmpty(this.state.email)) {
      this.errors.push({
        field: 'email',
        message: 'Please enter an email',
      })
    }

    // Add error if message empty
    if (this.isEmpty(this.state.message)) {
      this.errors.push({
        field: 'message',
        message: 'Please enter a message',
      })
    }

    // Add error if name shown and empty
    if (props.showNameField) {
      if (this.isEmpty(this.state.name)) {
        this.errors.push({
          field: 'name',
          message: 'Please enter your name',
        })
      }
    }
  }

  setName = name => {
    this.setState({
      name: name,
    })
  }

  setEmail = email => {
    this.setState({
      email: email,
    })
  }

  setMessage = message => {
    this.setState({
      message: message,
    })
  }

  setShowErrors = showErrors => {
    this.setState({
      showErrors: showErrors,
    })
  }

  // Handle form submission
  handleSubmit = e => {
    // If field this.errors then show them
    if (this.errors.length) {
      this.setShowErrors(true)
    } else {
      // Otherwise call onSubmit with form data
      if (this.props.onSubmit) {
        this.props.onSubmit({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message,
        })
      }
    }
  }

  render() {
    return (
      <>
        {this.props.status && this.props.status.message && (
          <FormStatus
            type={this.props.status.type}
            message={this.props.status.message}
          />
        )}

        <form
          onSubmit={e => {
            e.preventDefault()
            this.handleSubmit()
          }}
        >
          <div className="field is-horizontal">
            <div className="field-body">
              {this.props.showNameField && (
                <FormField
                  value={this.state.name}
                  type="text"
                  placeholder="Name"
                  error={this.state.showErrors && this.getError('name')}
                  onChange={value => this.setName(value)}
                />
              )}

              <FormField
                value={this.state.email}
                type="email"
                placeholder="Email"
                error={this.state.showErrors && this.getError('email')}
                onChange={value => this.setEmail(value)}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <FormField
                value={this.state.message}
                type="textarea"
                placeholder="Message"
                error={this.state.showErrors && this.getError('message')}
                onChange={value => this.setMessage(value)}
              />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <SectionButton
                    parentColor={this.props.parentColor}
                    size="medium"
                    state={
                      this.props.status && this.props.status.type === 'pending'
                        ? 'loading'
                        : 'normal'
                    }
                  >
                    {this.props.buttonText}
                  </SectionButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm
