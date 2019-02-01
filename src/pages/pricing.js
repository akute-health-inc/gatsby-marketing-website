import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../components/navigation';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Container,
  CardGroup,
} from 'reactstrap';

const PricingPage = ({data}) => (
  <div>
    <Navigation data={data.allContentfulNavbar} />
    <SEO title="Pricing" />
    <Container style={{minHeight: "80vh"}}>
      <div className="text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">{data.allContentfulPricingPage.edges[0].node.subtitle.subtitle}</p>
      </div>
      <CardGroup>
        <PricingCard data={data.allContentfulPricingPage.edges[0].node} styles={data.allContentfulStyles.edges[0].node.childContentfulStylesButtonJsonNode} />
      </CardGroup>
    </Container>
    <br />
    <Footer data={data.allContentfulFooter} />
  </div>
)

export default PricingPage;

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
    allContentfulPricingPage {
      edges {
        node {
          prices
          ctas
          planNames
          basicFeatures
          proFeatures
          enterpriseFeatures
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