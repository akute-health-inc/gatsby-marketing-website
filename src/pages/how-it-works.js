import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, CardGroup } from 'reactstrap'
import ComparisonCard from '../components/ComparisonCard'
import EmailForm from '../components/emailForm'

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
    </Container>
    <br />
    <Container>
      <EmailForm
        styles={
          data.allContentfulStyles.edges[0].node
            .childContentfulStylesButtonJsonNode
        }
        name={location.pathname}
      >
        Sign Up
      </EmailForm>
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
