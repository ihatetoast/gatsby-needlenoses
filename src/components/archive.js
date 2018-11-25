import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
const POST_ARCHIVE_QUERY = graphql`
  query PostArchiveQuery {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
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
`;
const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive:</h3>
          <ul>
            {allMarkdownRemark.edges.map(edge => {
              return (
                <li key={edge.node.frontmatter.slug}>
                  <Link to={`/posts${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
      </>
    )}
  />
);

export default Archive;
