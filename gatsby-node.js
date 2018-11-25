const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        //destructured the node
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          //allows us to pass data into the template
          context: {
            slug: node.frontmatter.slug,
          },
        });
      });
      resolve();
    });
  });
};
