import React, { Fragment } from 'react'
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const form = event.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() =>
        alert('Thanks for signing up! We will reach out to you shortly.')
      )
      .catch(error => alert(error))
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    const styles = this.props.styles
    const name = this.props.name
    const signupPage = this.props.signupPage

    return (
      <Fragment>
        {signupPage && (
          <Fragment>
            <form
              name={name}
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <div>
                <InputGroup>
                  <Input type="hidden" name="bot-field" />
                  <Input type="hidden" name="form-name" value={name} />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    required
                    onChange={this.handleChange}
                  />
                </InputGroup>
                <Button
                  style={{ fontSize: '1.4em' }}
                  className="btn-block"
                  color="primary"
                  // onClick={() => (window.location = '/signup')}
                >
                  {this.props.children}
                </Button>
                {/* <p style={{color: "grey"}}>No credit card required</p> */}
              </div>
            </form>
          </Fragment>
        )}
        {!signupPage && (
          <Fragment>
            <Button
              style={{ fontSize: '1.4em' }}
              className="btn-block"
              color="primary"
              onClick={this.toggle}
            >
              {this.props.children}
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <form
                name={name}
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <InputGroup>
                  <ModalBody>
                    <Input type="hidden" name="bot-field" />
                    <Input type="hidden" name="form-name" value={name} />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      required
                      onChange={this.handleChange}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <InputGroupAddon addonType="prepend">
                      <Button
                        style={styles}
                        type="submit"
                        onClick={this.toggle}
                      >
                        Submit
                      </Button>
                    </InputGroupAddon>
                  </ModalFooter>
                </InputGroup>
              </form>
            </Modal>
          </Fragment>
        )}
      </Fragment>
    )
  }
}

EmailForm.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
}
