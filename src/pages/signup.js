import React from 'react'
import { Container } from 'reactstrap'
import SEO from '../components/seo'
import EmailForm from '../components/emailForm'
import Navigation from '../components/navigation'
import { graphql } from 'gatsby'

const SignUp = ({ data, location }) => (
  <div>
    <Navigation data={data.allContentfulNavbar} />
    <SEO title="Sign Up" />
    <Container>
      <h3>
        Development is still in progress. Add your email here to receive updates
        and to get early access.
      </h3>
      <EmailForm
        styles={
          data.allContentfulStyles.edges[0].node
            .childContentfulStylesButtonJsonNode
        }
        name="Signup"
      >
        Sign Up
      </EmailForm>
    </Container>
  </div>
)

export default SignUp

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
  }
`
