import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Footer from '../components/Footer'
import FeatureList from '../components/FeatureList'
import { Container, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = ({ data, location }) => (
  <div>
    <Navigation data={data.allContentfulNavbar} />
    <SEO title={data.allContentfulHomePage.edges[0].node.title} />
    <Hero
      data={data.allContentfulHomePage}
      styles={
        data.allContentfulStyles.edges[0].node
          .childContentfulStylesButtonJsonNode
      }
      location={location.pathname}
      signupPage={true}
    >
      Request a Demo
    </Hero>
    {/* <Container
      fluid
      className="whiteBackground"
      style={{ paddingBottom: '1em', paddingTop: '1em' }}
    >
      <Container>
        <div className="text-center">
          <h4 className="display-5">
            {data.allContentfulHomePage.edges[0].node.whyTitle}
          </h4>
          <p className="lead">
            {data.allContentfulHomePage.edges[0].node.whySubtitle}
          </p>
        </div>
      </Container>
    </Container> */}

    {data.allContentfulHomePage.edges[0].node.childContentfulHomePageFeatureListJsonNode.feature.map(
      (feature, index) => {
        return (
          <FeatureList
            key={feature.title}
            data={feature}
            iteration={index}
            image={
              data.allContentfulHomePage.edges[0].node.featureImages[index]
            }
          />
        )
      }
    )}
    <br />
    <section
      className="col-xs-12 col-sm-10 col-md-8 team-section text-center my-5"
      style={{
        margin: '0 auto',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2 className="h1-responsive font-weight-bold my-5">Testimonials</h2>
      <div
        className="row text-center"
        style={{
          margin: '0 auto',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className="col-md-8 mb-md-0 mb-5">
          <div className="testimonial">
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
              integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
              crossOrigin="anonymous"
            />
            <div className="avatar mx-auto">
              <img
                src="https://cdn.membershipworks.com/u/5bfb4a97f033bf2b52209c08_lgl.jpg?1543358867"
                className="rounded-circle z-depth-1 img-fluid"
                style={{ maxWidth: '35%' }}
              />
            </div>
            <h4 className="font-weight-bold dark-grey-text mt-4">
              Dr. Jack Forbush, DO
            </h4>
            <h6 className="font-weight-bold blue-text my-3">
              Osteopathic Center for Family Medicine
            </h6>
            <p className="font-weight-normal dark-grey-text">
              <i className="fas fa-quote-left pr-2" />
              I’ve been working with AkuteHealth and must say that the developer
              has some fantastic ideas and plans for the product. They just
              released a video showing the e-prescribing integration which looks
              incredibly user-friendly! AkuteHealth is going to be very
              disruptive (in a good way!)
            </p>
          </div>
        </div>
      </div>
    </section>
    <br />
    <Container>
      <Button
        style={{ fontSize: '1.4em' }}
        className="btn-block"
        color="primary"
        onClick={() => (window.location = '/pricing')}
      >
        Learn More
      </Button>
    </Container>
    <br />
    <Footer data={data.allContentfulFooter} />
  </div>
)

export default IndexPage

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
    allContentfulHomePage {
      edges {
        node {
          title
          subtitle
          whyTitle
          whySubtitle
          bannerImage {
            fixed(width: 1000) {
              width
              height
              src
              srcSet
            }
            title
          }
          brands {
            file {
              url
            }
            title
          }
          childContentfulHomePageFeatureListJsonNode {
            feature {
              title
              subtitle
            }
          }
          featureImages {
            title
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
          stepNames
          step1
          step2
          step3
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
