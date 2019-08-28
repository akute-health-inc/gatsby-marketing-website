import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import TeamCard from '../components/TeamCard'
import ContentSection from '../components/ContentSection'
import TeamBiosSection from '../components/TeamBiosSection'
import CtaSection from '../components/CtaSection'
// import 'bootstrap/dist/css/bootstrap.css'
import { Container, CardGroup } from 'reactstrap'
// import styles from '../styles.scss'
import '../css/fontStyle.css'

const AboutUsPage = ({ data }) => (
  <div>
    <Navigation data={data.allContentfulNavbar} />
    <SEO title="About Us" />
    {/* <Container>
      <div className="text-center">
        <h1 class="display-4">About Us</h1>
        <p class="lead">Learn about and contact our team.</p>
      </div>
      <CardGroup>
        {data.allContentfulTeamPage.edges[0].node.names.map((name, index) => {
          return (
            <TeamCard data={data.allContentfulTeamPage.edges[0].node} index={index} />
          )
        })}
      </CardGroup>
    </Container> */}
    <>
      <div className="heroBackground">
        <ContentSection
          // color="white"
          size="large"
          title="Heal Happier"
          subtitle="Enabling doctors and patients to heal happier"
        />
      </div>
      <TeamBiosSection
        color="white"
        size="medium"
        title="Meet the Team"
        subtitle=""
        data={data.allContentfulTeamPage.edges[0].node}
      />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        // buttonOnClick={() => {
        //   router.push('/pricing')
        // }}
      />
    </>
    );
    <br />
    <Footer data={data.allContentfulFooter} />
  </div>
)

export default AboutUsPage

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
    allContentfulTeamPage {
      edges {
        node {
          bios
          titles
          names
          twitters
          linkedIns
          emails
          profilePics {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
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
