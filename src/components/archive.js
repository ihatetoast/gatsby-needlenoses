import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Archive = () => (
  <StaticQuery
    query={graphql`
      query PostArchiveQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
                date(formatString: "DD MMMM YYYY")
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive:</h3>
          {allMarkdownRemark.edges.map(edge => {
            return <li>{edge.node.frontmatter.title}</li>;
          })}
        </aside>
      </>
    )}
  />
);

export default Archive;
