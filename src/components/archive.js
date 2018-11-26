import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu,
      Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #7f319a;
  }
`;
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
          <ArchiveList>
            {allMarkdownRemark.edges.map(edge => {
              return (
                <li key={edge.node.frontmatter.slug}>
                  <Link to={`/posts${edge.node.frontmatter.slug}`}>
                    {edge.node.frontmatter.title}
                  </Link>
                </li>
              );
            })}
          </ArchiveList>
        </aside>
      </>
    )}
  />
);

export default Archive;
