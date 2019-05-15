import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import EmailForm from './emailForm'

export default class Hero extends React.Component {
  render() {
    const content = this.props.data.edges[0].node
    const styles = this.props.styles
    const location = this.props.location
    return (
      <div style={{ backgroundColor: 'lightgrey' }}>
        <Container>
          <Jumbotron style={{ backgroundColor: 'transparent' }}>
            <div className="row">
              <div className="col-lg-7">
                <h1 className="display-5">{content.title}</h1>
                {/* <p className="lead" style={{fontSize: "1.4em"}}>{content.subtitle}</p>
                <EmailForm styles={styles} name={location}>{this.props.children}</EmailForm> */}
              </div>
              <div className="col-lg-5 col-md-8">
                {/* <br /> */}
                <p className="lead" style={{ fontSize: '1.4em' }}>
                  {content.subtitle}
                </p>
                {this.props.children !== 'Signup for the Waitlist' && (
                  <EmailForm styles={styles} name={location}>
                    {this.props.children}
                  </EmailForm>
                )}
                {this.props.children === 'Signup for the Waitlist' && (
                  <Button href="https://signup.akutehealth.com" color="primary">
                    {this.props.children}
                  </Button>
                )}
                {/* <img className="img-fluid mx-auto d-block" style={{maxHeight: "75vh", width: "auto"}} src={content.bannerImage.fixed.src} alt={content.bannerImage.title} /> */}
              </div>
            </div>
          </Jumbotron>
        </Container>
      </div>
    )
  }
}

Hero.propTypes = {
  data: PropTypes.object.isRequired,
  styles: PropTypes.object,
  location: PropTypes.string.isRequired,
}
