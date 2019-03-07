import React from 'react';
import { graphql } from 'gatsby';
import Navigation from '../components/navigation';
import BlogHeader from '../components/BlogHeader';
import Footer from '../components/Footer';
import EmailForm from '../components/emailForm';
import {
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import SEO from '../components/seo';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/blog.css';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

class BlogPostTemplate extends React.Component {
  createHTML(article) {
    return (
      <div dangerouslySetInnerHTML={{__html: `${article}`}} />
    );
  }

  render() {
    const siteData = this.props.data;
    const blogData = this.props.pageContext.data;
    const location = this.props.location;
    const jsonContent = JSON.parse(blogData.content.content);
    console.log('in blog post');
    console.log(this.props.location.href);

    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, next) => `<p><blog-p>${next(node.content)}</blog-p></p>`,
        [BLOCKS.HEADING_1]: (node, next) => `<h1><blog-h1>${next(node.content)}</blog-h1></h1>`,
        [BLOCKS.HEADING_2]: (node, next) => `<h2><blog-h2>${next(node.content)}</blog-h2></h2>`,
        [BLOCKS.HEADING_3]: (node, next) => `<h3><blog-h3>${next(node.content)}</blog-h3></h3>`,
        [BLOCKS.HEADING_4]: (node, next) => `<h4><blog-h4>${next(node.content)}</blog-h4></h4>`,
        [BLOCKS.HEADING_5]: (node, next) => `<h5><blog-h5>${next(node.content)}</blog-h5></h5>`,
        [BLOCKS.HEADING_6]: (node, next) => `<h6><blog-h6>${next(node.content)}</blog-h6></h6>`,
      }
    };
    const articleContent = documentToHtmlString(jsonContent, options);

    return (
      <div>
        <meta property="og:title" content={blogData.title} />
        <meta property="og:image" content={blogData.image.fluid.src} />
        <meta property="og:description" content={blogData.subtitle} />
        <meta property="og:url" content={this.props.location.href} />
        <meta property="og:type" content="article" />
        <Navigation data={siteData.allContentfulNavbar} />
        <SEO title={blogData.title} keywords={blogData.keywords} description={blogData.subtitle} author={blogData.author} />
        <BlogHeader image={blogData.image} title={blogData.title} subtitle={blogData.subtitle} postDate={blogData.postDate} author={blogData.author} />
        <br />
        <Container>
          <div className="container blog-body">
            {this.createHTML(articleContent)}
          </div>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous"></link>
          <div id="share">
            <OutboundLink className="facebook" href={`https://www.facebook.com/share.php?u=${location.href}&title=${blogData.title}`} target="blank"><i className="fab fa-facebook-f"></i></OutboundLink>
            <OutboundLink className="twitter" href={`https://twitter.com/intent/tweet?status=${blogData.title}+${location.href}`} target="blank"><i className="fab fa-twitter"></i></OutboundLink>
            <OutboundLink className="linkedin" href={`https://www.linkedin.com/shareArticle?mini=true&url=${location.href}&title=${blogData.title}&source=${location.origin}`} target="blank"><i className="fab fa-linkedin-in"></i></OutboundLink>
            <OutboundLink className="pinterest" href={`https://pinterest.com/pin/create/bookmarklet/?media=${blogData.image.fluid.src}&url=${location.href}&is_video=false&description=${blogData.title}`} target="blank"><i className="fab fa-pinterest-p"></i></OutboundLink>
          </div>
          <EmailForm styles={siteData.allContentfulStyles.edges[0].node.childContentfulStylesButtonJsonNode} name={location.pathname}>Sign up for our newsletter</EmailForm>
          <br />
        </Container>
        <Footer data={siteData.allContentfulFooter}/>
      </div>
    );
  }
}

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired
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