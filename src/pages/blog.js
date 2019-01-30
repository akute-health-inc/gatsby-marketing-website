import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/Footer';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import {
  Container,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/blog.css';

class Blog extends React.Component {
  render() {
    const siteData = this.props.data
    const blogData = this.props.data.allContentfulBlogPost.edges
    return (
      <div>
        <Navigation data={siteData.allContentfulNavbar} />
        <SEO title="Blog" />
        <Container id="site-main" className="site-main outer" role="main">
          <div className="inner">
            <div className="post-feed">
              {blogData.map(edge => {
                const post = edge.node;
                console.log(post);
                return (
                  <article className="post-card post">
                    <a
                      className="post-card-image-link"
                      href={`/blog/${post.topicCluster}/${post.slug}`}
                    >
                      <div
                        className="post-card-image"
                        style={{
                          backgroundImage: 'url('+ post.image.fluid.src + ')',
                        }}
                      />
                    </a>
                    <div className="post-card-content">
                      <a
                        className="post-card-content-link"
                        href={`/blog/${post.topicCluster}/${post.slug}`}
                      >
                        <header className="post-card-header">
                          <span className="post-card-tags">{post.topicCluster}</span>
                          <h2 className="post-card-title">
                            {post.title}
                          </h2>
                        </header>
                        <section className="post-card-excerpt">
                          <p>
                            {post.subtitle}
                          </p>
                        </section>
                      </a>
                      <footer className="post-card-meta">
                        <img
                          className="author-profile-image"
                          src={post.authorImage.fluid.src}
                          alt={post.author}
                        />
                        <span className="post-card-author">
                          <a href="/about-us">{post.author}</a>
                        </span>
                      </footer>
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

export default Blog

Blog.propTypes = {
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
    allContentfulBlogPost {
      edges {
        node {
          title
          subtitle
          author
          postDate
          image {
            fluid(maxWidth: 1500) {
              src
            }
          }
          keywords
          topicCluster
          slug
          content {
            content
          }
          authorImage {
            fluid(maxWidth: 100) {
              src
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
