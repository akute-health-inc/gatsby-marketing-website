import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import SEO from '../components/seo'
import Footer from '../components/Footer'
import TeamCard from '../components/TeamCard'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, CardGroup } from 'reactstrap'

const AboutUsPage = ({ data }) => (
  <div>
    <Navigation data={data.allContentfulNavbar} />
    <SEO title="About Us" />
    <Container>
      <div className="text-center">
        <h1 class="display-4">About Us</h1>
        <p class="lead">Learn about and contact our team.</p>
      </div>
      <CardGroup>
        {data.allContentfulTeamPage.edges[0].node.names.map((name, index) => {
          return (
            <div>
              <TeamCard
                data={data.allContentfulTeamPage.edges[0].node}
                index={index}
              />
            </div>
          )
        })}
      </CardGroup>
    </Container>
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
