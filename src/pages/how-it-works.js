import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, CardGroup } from 'reactstrap'
import ComparisonCard from '../components/ComparisonCard'
import EmailForm from '../components/emailForm'
import labGif from '../static/lab_search_gif.gif'

const HowItWorksPage = ({ data, location }) => (
  <div>
    <Navigation data={data.allContentfulNavbar} />
    <SEO title="How It Works" />
    <Container style={{ minHeight: '80vh' }}>
      <div className="text-center">
        <h1 className="display-4">How it works</h1>
        <p className="lead">
          {data.allContentfulHowItWorksPage.edges[0].node.subtitle.subtitle}
        </p>
      </div>
      <CardGroup>
        <ComparisonCard
          data={data.allContentfulHowItWorksPage.edges[0].node}
          styles={
            data.allContentfulStyles.edges[0].node
              .childContentfulStylesButtonJsonNode
          }
        />
      </CardGroup>
      <br />
      <Container>
        <h5>How to Get Started in Just a Few Minutes</h5>
        <br />
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            paddingTop: 25,
            height: 0,
          }}
        >
          <iframe
            title="Getting Started Walkthrough"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://www.youtube.com/embed/IEuqJgO-TtU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* <div className="col-xs-6">
          <h4
            style={{
              display: 'flex',
              justifyText: 'center',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Easily find labs and sort by date:
          </h4>
          <img
            width="560"
            height="315"
            src={labGif}
            alt="Easily find labs and sort by date"
          />
        </div> */}
      </Container>
    </Container>
    <br />
    <Container>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-xs-3" />
        <div className="col-lg-6 col-md-6 col-xs-6">
          <EmailForm
            styles={
              data.allContentfulStyles.edges[0].node
                .childContentfulStylesButtonJsonNode
            }
            name={'Pro'}
            signupPage={true}
          >
            Request a Demo
          </EmailForm>
        </div>
        <div className="col-lg-3 col-md-3 col-xs-3" />
        {/* <div className="col-lg-6 col-md-6 col-xs-6">
      <Button
        style={{ fontSize: '1.4em'}}
        className="btn-block"
        color="primary"
        onClick={() =>
          (window.location = 'https://schedule-demo.akutehealth.com')
        }
      >
        Schedule a Demo
      </Button>
      </div> */}
      </div>
    </Container>
    <br />
    <Footer data={data.allContentfulFooter} />
  </div>
)

export default HowItWorksPage

export const pageQuery = graphql`
  query {
    allContentfulNavbar {
      edges {
        node {
          brandLogo {
            fixed(width: 200) {
              width
              height
              src
              srcSet
            }
          }
          links
        }
      }
    }
    allContentfulHowItWorksPage {
      edges {
        node {
          choiceType
          inHouseFeatures
          akuteHealthFeatures
          othersFeatures
          subtitle {
            subtitle
          }
        }
      }
    }
    allContentfulStyles {
      edges {
        node {
          childContentfulStylesButtonJsonNode {
            backgroundColor
            color
          }
        }
      }
    }
    allContentfulFooter {
      edges {
        node {
          companyName
          companyContactEmail
          driftAppId
          socialPages
          socialImages {
            fixed(width: 30) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
