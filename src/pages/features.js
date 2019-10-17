import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Footer from '../components/Footer'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/blog.css'

class Features extends React.Component {
  render() {
    const siteData = this.props.data
    const featureData = this.props.data.allContentfulFeaturePost.edges
    return (
      <div>
        <Navigation data={siteData.allContentfulNavbar} />
        <SEO title="Akute EHR Features" />
        <Container
          id="site-main"
          className="site-main outer"
          role="main"
          style={{ minHeight: '85vh' }}
        >
          <div className="inner">
            <div className="post-feed">
              {featureData.map(edge => {
                const post = edge.node
                return (
                  <article className="post-card post" key={post.slug}>
                    <a
                      className="post-card-image-link"
                      href={`/features/${post.slug}`}
                    >
                      <div
                        className="post-card-image"
                        style={{
                          backgroundImage: 'url(' + post.image.fluid.src + ')',
                        }}
                      />
                    </a>
                    <div className="post-card-content">
                      <a
                        className="post-card-content-link"
                        href={`/features/${post.slug}`}
                      >
                        <header className="post-card-header">
                          <h2 className="post-card-title">{post.title}</h2>
                        </header>
                        <section className="post-card-excerpt">
                          <p>{post.subtitle}</p>
                        </section>
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </Container>
        <Footer data={siteData.allContentfulFooter} />
      </div>
    )
  }
}

export default Features

Features.propTypes = {
  data: PropTypes.object.isRequired,
}

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
    allContentfulFeaturePost {
      edges {
        node {
          title
          subtitle
          postDate
          image {
            fluid(maxWidth: 1500) {
              src
            }
          }
          keywords
          slug
          extraTitle
          extraSubtitle
          extraCta
          extraLink
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
