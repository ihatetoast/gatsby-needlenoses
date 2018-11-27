import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import ihatetoastLogo from '../images/IHT.png';

const HeaderWrapper = styled.div`
  background: #4e1162;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem auto;
  max-width: 960px;
  padding: 0.5rem;
  h1 {
    margin: 2rem;
  }
`;
const LogoWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: white;
  border-radius: 50%;
  padding: 0.5em.2em 0em;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
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
