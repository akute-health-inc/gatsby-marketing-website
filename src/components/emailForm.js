import React from 'react';
import { Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { navigateTo } from "gatsby-link";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class EmailForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    const styles = this.props.styles
    const name = this.props.name
    return (
      <form
        name={name}
        method="post"
        action="#"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <InputGroup>
          <Input
            type="hidden"
            name="form-name"
            value={name}
            onChange={this.handleChange}
          />
          <Input
            type="email"
            placeholder="Enter Your Email"
            onChange={this.handleChange}
          />
          <InputGroupAddon addonType="prepend">
            <Button style={styles} type="submit">
              {this.props.children}
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </form>
    )
  }
}

EmailForm.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
}
