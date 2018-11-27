import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Archive from './archive';
import './layout.css';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 25px;
`;

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: { regex: "/ktfabcouch/" }) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Spring
          from={{ height: location.pathname === '/' ? 50 : 400 }}
          to={{ height: location.pathname === '/' ? 400 : 0 }}
        >
          {styles => (
            <div style={{ overflow: 'hidden', maxWidth: '960', ...styles }}>
              <Img fluid={data.file.childImageSharp.fluid} />
            </div>
          )}
        </Spring>

        <MainLayout>
          <div>{children}</div>
          <Archive />
        </MainLayout>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
//solve build issue for serverside probs
Layout.defaultProps = {
  location: {},
};

export default Layout;
