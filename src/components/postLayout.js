import React, { Component } from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';
//static queries can be used anywhere but can't use variables and can't use context

//page query. must be used on pages

export default class postLayout extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Post Layout</h1>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/post-20181028" } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
