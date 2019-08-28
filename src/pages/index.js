import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Footer from '../components/Footer'
import FeatureList from '../components/FeatureList'
import { Container, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Testimonials from '../components/Testimonials'

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
    <Testimonials />
    {/* ))} */}
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
