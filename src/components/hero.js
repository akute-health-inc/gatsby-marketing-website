import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/fontStyle.css'
import EmailForm from './emailForm'

export default class Hero extends React.Component {
  render() {
    const content = this.props.data.edges[0].node
    const styles = this.props.styles
    const location = this.props.location
    return (
      <div className="heroBackground">
        <Container>
          <Jumbotron
            style={{ backgroundColor: 'transparent', marginBottom: '0' }}
          >
            <div className="row">
              <div className="col-lg-7">
                <h1 className="display-5 title">{content.title}</h1>
                {/* <h1 className="display-5 title" style={{ color: 'black' }}>
                  Anytime. Anywhere.
                </h1> */}
                {/* <p className="lead" style={{fontSize: "1.4em"}}>{content.subtitle}</p>
                <EmailForm styles={styles} name={location}>{this.props.children}</EmailForm> */}
                {/* </div> */}
                {/* <div className="col-lg-5 col-md-8"> */}
                {/* <br /> */}
                <p className="lead" style={{ fontSize: '1.6em' }}>
                  {content.subtitle}
                </p>
                <EmailForm
                  styles={styles}
                  name={location}
                  signupPage={this.props.signupPage}
                >
                  {this.props.children}
                </EmailForm>
                {/* {this.props.children === 'Signup for Early Access' && (
                  <Button
                    href="https://signup.akutehealth.com"
                    color="primary"
                    style={{ fontSize: '1.4em' }}
                    className="btn-block"
                  >
                    {this.props.children}
                  </Button>
                )} */}
              </div>
              {/* <div className="col-lg-5 col-md-8">
                <img
                  className="img-fluid mx-auto d-block"
                  style={{ maxHeight: '75vh', width: 'auto' }}
                  src={content.bannerImage.fixed.src}
                  alt={content.bannerImage.title}
                />
              </div> */}
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
