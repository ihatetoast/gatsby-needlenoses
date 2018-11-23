import React from 'react';
import { Link } from 'gatsby';

import ihatetoastLogo from '../images/IHT.png';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '4em',
              height: '4em',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '.5em .2em 0em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              style={{
                width: '80%',
                height: '80%',
              }}
              src={ihatetoastLogo}
              alt="logo"
            />
          </div>

          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
