import React from 'react';
import {
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';

export default class Banner extends React.Component {

  render() {
    const logos = this.props.data.edges[0].node.brands;

    return (
      <Container fluid style={{backgroundColor: "lightGrey"}} >
        <Container>
          <br />
          <ul style={{display: "inline-block", overflowX: "auto", margin: "0", padding: "0", width: "100%"}}>
            {logos.map((logo) => {
              return (
                <li key={logo.title} className="col-md-6" style={{display: "inline-block", margin: "auto", float: "none", verticalAlign: "middle"}}>
                  <img src={logo.file.url} alt={logo.file.title} style={{filter: "grayscale(100%)", height: "70px"}} />
                </li>
              )
            })}
          </ul>
          <br />
        </Container>
      </Container>
    )
  }
}

Banner.propTypes = {
  data: PropTypes.object.isRequired
}