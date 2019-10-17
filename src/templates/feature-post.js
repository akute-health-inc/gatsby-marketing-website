import React from 'react'
import { graphql } from 'gatsby'
import Navigation from '../components/navigation'
import Footer from '../components/Footer'
import EmailForm from '../components/emailForm'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
import SEO from '../components/seo'
import 'bootstrap/dist/css/bootstrap.css'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

class BlogPostTemplate extends React.Component {
  render() {
    const siteData = this.props.data
    const featureData = this.props.pageContext.data
    const location = this.props.location
    const origin = 'https://www.akutehealth.com'
    const href = origin + location.pathname
    return (
      <div>
        <Navigation data={siteData.allContentfulNavbar} />
        <SEO
          title={featureData.title}
          keywords={featureData.keywords}
          description={featureData.subtitle}
          type="article"
          // image={imageUrl}
        />
        <Container>
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7 col-xs-12">
                <iframe
                  width={'100%'}
                  height="315"
                  src={featureData.youtubeLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="col-lg-5 col-xs-12">
                <h1 className="font-weight-light">{featureData.title}</h1>
                <p>{featureData.subtitle}</p>
                {/* <EmailForm
                  styles={
                    siteData.allContentfulStyles.edges[0].node
                      .childContentfulStylesButtonJsonNode
                  }
                  name="System"
                >
                  Request a Demo
                </EmailForm> */}
                <EmailForm
                  styles={
                    siteData.allContentfulStyles.edges[0].node
                      .childContentfulStylesButtonJsonNode
                  }
                  name="System"
                  signupPage={true}
                >
                  Request a Demo
                </EmailForm>
              </div>
            </div>

            {/* <div className="card text-white bg-secondary my-5 py-4 text-center">
              <div className="card-body">
                <h3 className="text-white m-0">Check out our other content!</h3>
              </div>
            </div> */}

            <div className="row">
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <div className="card-body">
                    <h2 className="card-title">{featureData.extraTitle}</h2>
                    <p className="card-text">{featureData.extraSubtitle}</p>
                  </div>
                  <div className="card-footer">
                    <a
                      href={featureData.extraLink}
                      className="btn btn-primary btn-sm"
                    >
                      {featureData.extraCta}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <div className="card-body">
                    <h2 className="card-title">Join our Facebook Group</h2>
                    <p className="card-text">
                      Join our Facebook group and help design the EHR of your
                      dreams!
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.facebook.com/groups/AkuteHealth"
                      target="_blank"
                      className="btn btn-primary btn-sm"
                    >
                      Join Group
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="card h-100">
                  <div className="card-body">
                    <h2 className="card-title">Per-Patient Pricing</h2>
                    <p className="card-text">
                      We price per patient, rather than per physician. This
                      makes our EHR much more affordable when you're first
                      starting and incentivizes us to help you grow. Win win!
                    </p>
                  </div>
                  <div className="card-footer">
                    <a
                      href="https://www.akutehealth.com/pricing"
                      className="btn btn-primary btn-sm"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossOrigin="anonymous"
          />
          <div id="share">
            <OutboundLink
              className="facebook"
              href={`https://www.facebook.com/share.php?u=${href}&title=${
                featureData.title
              }`}
              target="blank"
            >
              <i className="fab fa-facebook-f" />
            </OutboundLink>
            <OutboundLink
              className="twitter"
              href={`https://twitter.com/intent/tweet?status=${
                featureData.title
              }+${href}`}
              target="blank"
            >
              <i className="fab fa-twitter" />
            </OutboundLink>
            <OutboundLink
              className="linkedin"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${
                featureData.title
              }&source=${origin}`}
              target="blank"
            >
              <i className="fab fa-linkedin-in" />
            </OutboundLink>
            {/* <OutboundLink
              className="pinterest"
              href={`https://pinterest.com/pin/create/bookmarklet/?media=${imageUrl}&url=${href}&is_video=false&description=${
                featureData.title
              }`}
              target="blank"
            >
              <i className="fab fa-pinterest-p" />
            </OutboundLink> */}
          </div>
          <EmailForm
            styles={
              siteData.allContentfulStyles.edges[0].node
                .childContentfulStylesButtonJsonNode
            }
            name="Medium"
          >
            Get Weekly Product Updates
          </EmailForm>
          <br />
        </Container>
        <Footer data={siteData.allContentfulFooter} />
      </div>
    )
  }
}

export default BlogPostTemplate

BlogPostTemplate.propTypes = {
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
