import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../components/navigation';
import SEO from '../components/seo';
import Footer from '../components/Footer';
import PricingCard from '../components/PricingCard';
import 'bootstrap/dist/css/bootstrap.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics'
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
        <PricingCard data={data.allContentfulPricingPage.edges[0].node} styles={data.allContentfulStyles.edges[0].node.childContentfulStylesButtonJsonNode} signupPage={true}/>
      </CardGroup>
    </Container>
    <Container>
      <br />
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <h3 style={{justifyContent: "center", display: "flex"}}>FAQ</h3>
          </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" />
      </div>
      <br />
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h5 style={{display: "flex", justifyContent: "center"}}>New solo practice? Need help to grow?</h5>
          <p>We want to help new direct care providers gain patients and grow. We have a startup program for practices that have fewer than 100 patients to help them grow and improve their marketing efforts. Email us at{' '}
            <OutboundLink
              href={`mailto:${data.allContentfulFooter.edges[0].node.companyContactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.allContentfulFooter.edges[0].node.companyContactEmail}
            </OutboundLink>
            {' '}with the subject, <b>New Practice</b>, and we will discuss the details.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h5>What is considered an appointment?</h5>
          <p>Any patient appointment created on the calendar. Creating a busy time slot that is not a patient appointment is not considered an appointment.</p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h5>Why price by appointment?</h5>
          <p>We want to support you as your practice grows. By charging per appointment, we can offer a low cost solution while you are in the early stages while also being incentivized to help you grow. Alignment of incentives are good in all businesses, not just healthcare :)</p>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h5>Can I import records from my previous EHR to Akute Health?</h5>
          <p>Yes, just contact us at{' '}
            <OutboundLink
              href={`mailto:${data.allContentfulFooter.edges[0].node.companyContactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.allContentfulFooter.edges[0].node.companyContactEmail}
            </OutboundLink>
            {' '}and help you from there.</p>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <h5>What if I just want to use the scheduling and/or communication?</h5>
          <p>You can do that! Just email us at{' '}
            <OutboundLink
              href={`mailto:${data.allContentfulFooter.edges[0].node.companyContactEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.allContentfulFooter.edges[0].node.companyContactEmail}
            </OutboundLink>
            {' '}for separate pricing and onboarding details.</p>
        </div>
      </div>
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