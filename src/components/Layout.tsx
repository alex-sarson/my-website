import React, { useState } from 'react';
import { styled } from 'styled-components';
import Navigation from './Navigation';
import MobileHeader from './MobileHeader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Page>
      <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Main>
        <ContentContainer>{children}</ContentContainer>
      </Main>
    </Page>
  );
};

const Page = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const Main = styled.main`
  width: 100%;
  padding: 64px 0 0 0;

  @media screen and (min-width: 960px) {
    padding: 0 0 0 88px;
  }
`;

const ContentContainer = styled.div`
  margin: 8px 8px 0 8px;
`;

export default Layout;
