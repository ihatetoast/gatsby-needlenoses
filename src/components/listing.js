import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(127, 49, 154, 0.08);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #0f0f0f;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    font-size: 1.25rem;
    margin-bottom: 0;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Ubuntu,
      Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #7f319a;
  }
`;
const LISTING_QUERY = graphql`
  query PostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
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

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      // ({ node }) destructures node. we don't have to have edge.node below
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link class="read-more" to={`/posts${node.frontmatter.slug}`}>
            Read more
          </Link>
        </Post>
      ))
    }
  />
);

export default Listing;
