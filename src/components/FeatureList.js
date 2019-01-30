import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import 'bootstrap/dist/css/bootstrap.css';

export default class FeatureList extends React.Component {
  render() {
    const feature = this.props.data;
    const iteration = this.props.iteration;
    const image = this.props.image;

    const leftFeature = (
      <Container key={feature.title} fluid>
        <Container>
        <div className="row" style={{ borderColor: 'white' }}>
          <div className="col-lg-8 col-md-6 order-lg-1 order-12 align-self-center">
              <h3 className="display-5">{feature.title}</h3>
              <p className="lead">{feature.subtitle}</p>
            </div>
            <div className="col-lg-4 col-md-6 order-lg-12 order-12">
              <Img
                fluid={image.fluid}
                alt={image.title}
              />
            </div>
          </div>
        </Container>
      </Container>
    )

    const rightFeature = (
      <Container key={feature.title} fluid>
        <Container>
          <div className="row" style={{ borderColor: 'lightGrey' }}>
            <div className="col-lg-4 col-md-6 order-lg-1 order-12">
              <Img
                fluid={image.fluid}
                alt={image.title}
              />
            </div>
            <div className="col-lg-8 col-md-6 order-lg-12 order-1 align-self-center">
              <h3 className="display-5">{feature.title}</h3>
              <p className="lead">{feature.subtitle}</p>
            </div>
          </div>
        </Container>
      </Container>
    )

    if (iteration%2) {
      return (
        leftFeature
      )
    } else {
      return (
        rightFeature
      )
    }
  }
}

FeatureList.propTypes = {
  data: PropTypes.object.isRequired,
  iteration: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
}
