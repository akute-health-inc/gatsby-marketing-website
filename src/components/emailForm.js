import React from 'react';
import {
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export default class EmailForm extends React.Component {

  render() {
    const styles = this.props.styles;
    const name = this.props.name;
    return (
      <Form data-netlify="true" data-netlify-honeypot="bot-field">
        <InputGroup>
          <Input type="hidden" name="form-name" value={name} />
          <Input type="email" placeholder="Enter Your Email" />
          <InputGroupAddon addonType="prepend">
            <Button style={styles}>{this.props.children}</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    )
  }
}

EmailForm.propTypes = {
  styles: PropTypes.object,
  name: PropTypes.string.isRequired,
}