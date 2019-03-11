import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title, author, type, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteData = data.allContentfulSeo.edges[0].node;
        const metaDescription =
          description || siteData.description;
        const siteAuthor = 
          author || siteData.author;
        const ogType = 
          type || 'website';
        const siteImage = 
          image || '';
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${siteData.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:image`,
                content: siteImage,
              },
              {
                property: `og:type`,
                content: ogType,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:site`,
                content: '@AkuteHealth',
              },
              {
                name: `twitter:creator`,
                content: siteAuthor,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `twitter:image`,
                content: siteImage,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
            link={[
              { rel: 'icon', type: 'image/png', sizes: "48x48", href: `${siteData.favicon.fixed.src}` },
            ]}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allContentfulSeo {
      edges {
        node {
          keywords
          title
          description
          author
          githubLink
          tagline
          favicon {
            fixed(width: 48) {
              src
            }
          }
        }
      }
    }
  }
`
