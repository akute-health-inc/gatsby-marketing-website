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
    <SEO title="Software connecting healthcare providers to patients." />
    <Hero
      data={data.allContentfulHomePage}
      styles={
        data.allContentfulStyles.edges[0].node
          .childContentfulStylesButtonJsonNode
      }
      location={location.pathname}
    >
      Sign up for Early Access
    </Hero>
    {/* <Container>
      <div className="text-center">
        <h1 className="display-5">How it Works</h1>
      </div>
      <br />
      <CardGroup>
        <Steps data={data.allContentfulHomePage.edges[0].node} styles={data.allContentfulStyles.edges[0].node.childContentfulStylesButtonJsonNode} />
      </CardGroup>
    </Container> */}
    {/* <br /> */}
    {/* <Banner data={data.allContentfulHomePage} /> */}

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
    <Container>
      <Button
        style={{ fontSize: '1.4em' }}
        className="btn-block"
        color="primary"
      >
        <a href="/pricing" style={{ color: 'white' }}>
          Learn More
        </a>
      </Button>
    </Container>
    <br />
    <Footer data={data.allContentfulFooter} />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query basicPageQuery {
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
