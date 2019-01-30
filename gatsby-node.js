/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  return graphql(`
        {
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
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          throw result.errors;
        }
        result.data.allContentfulBlogPost.edges.forEach((edge) => {
          createPage({
            path: `blog/${edge.node.topicCluster}/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              data: edge.node
            }
          });
        });
      });
}
