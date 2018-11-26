import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ihatetoastLogo from '../images/IHT.png';

const HeaderWrapper = styled.div`
  background: #7f319a;
  margin-bottom: 1.45rem;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem;
  h1 {
    margin: 2rem;
  }
`;
const LogoWrapper = styled.div`
  width: 7rem;
  height: 7rem;
  background-color: white;
  border-radius: 50%;
  padding: 0.5em.2em 0em;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <LogoWrapper>
        <img src={ihatetoastLogo} alt="logo" />
      </LogoWrapper>
      <h1>
        <Link
          to="/"
          style={{
            color: 'white',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
