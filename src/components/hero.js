import React from 'react';
import {
  Jumbotron,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import EmailForm from './emailForm';

export default class Hero extends React.Component {
 
  render() {
 
    const content = this.props.data.edges[0].node;
    const styles = this.props.styles;
    const location = this.props.location;
    return (
      <Container>
        <Jumbotron style={{backgroundColor: 'transparent'}}>
          <div className="row">
            <div className="col-lg-7">
              <h1 className="display-5">{content.title}</h1>
              <p className="lead">{content.subtitle}</p>
              <EmailForm styles={styles} name={location}>Learn More</EmailForm>
            </div>
            <div className="col-lg-5 col-md-8">
              <br />
              <img className="img-fluid mx-auto d-block" style={{maxHeight: "75vh", width: "auto"}} src={content.bannerImage.fixed.src} alt={content.bannerImage.title} />
            </div>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
  styles: PropTypes.object,
  location: PropTypes.string.isRequired,
}
