import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, CardGroup } from 'reactstrap'
import ComparisonCard from '../components/ComparisonCard'
import EmailForm from '../components/emailForm'
import labGif from "../static/lab_search_gif.gif";

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
      <h4 style={{display: "flex", justifyText: "center", justifyContent: "center", alignItems: "center"}}>How to set and monitor patient goals in Akute Health:</h4>
      <Container style={{display: "flex", justifyText: "center", justifyContent: "center", alignItems: "center"}}>
        <iframe title="Akute Health EHR Goals Demo" width="560" height="315" src="https://www.youtube.com/embed/BJ6tzNyBNY8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Container>
      <br />
      <h4 style={{display: "flex", justifyText: "center", justifyContent: "center", alignItems: "center"}}>Easily find labs and sort by date:</h4>
      <Container style={{display: "flex", justifyText: "center", justifyContent: "center", alignItems: "center"}}>
        <img width="560" height="315" src={labGif} alt="Easily find labs and sort by date" />
      </Container>
    </Container>
    <br />
    {/* <Container>
      
    </Container> */}
    <Container>
      <div className="row">
        <div className="col-lg-3 col-md-3 col-xs-3" />
        <div className="col-lg-6 col-md-6 col-xs-6">
      <EmailForm
        styles={
          data.allContentfulStyles.edges[0].node
            .childContentfulStylesButtonJsonNode
        }
        name={"Pro"}
        signupPage={true}
      >
        Try for Free
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
