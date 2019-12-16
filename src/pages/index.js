import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import ClientsSection from '../components/ClientsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import CtaSection from '../components/CtaSection'
// import { useRouter } from '../util/router.js'
import Navbar from '../components/Navbar'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

function HomePage({ data, location }) {
  return (
    <>
      <Navbar color="white" spaced={true} data={data.allContentfulNavbar} />
      <SEO title={data.allContentfulHomePage.edges[0].node.title} />
      <HeroSection
        color="white"
        size="medium"
        data={data.allContentfulHomePage}
        buttonText="Get Started"
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        // buttonOnClick={() => {
        //   router.push('/pricing')
        // }}
      />
      <ClientsSection color="light" size="medium" title="Trusted by" />
      {/* {data.allContentfulHomePage.edges[0].node.childContentfulHomePageFeatureListJsonNode.feature.map(
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
    )} */}
      <FeaturesSection
        color="white"
        size="medium"
        features={
          data.allContentfulHomePage.edges[0].node
            .childContentfulHomePageFeatureListJsonNode.feature
        }
        images={data.allContentfulHomePage.edges[0].node.featureImages}
      />
      <TestimonialsSection
        color="white"
        size="medium"
        title="Here's what people are saying"
        subtitle=""
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
      <Divider color="light" />
      <Footer
        color="white"
        size="medium"
        logo="https://uploads.divjoy.com/logo.svg"
        description="A short description of what you do here"
        copyright="© Company Name"
      />
    </>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    allContentfulNavbar {
      edges {
        node {
          brandLogo {
            fixed(width: 185) {
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
