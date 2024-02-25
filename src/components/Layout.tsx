import React from 'react';
import { styled } from 'styled-components';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Page>
      <Navigation />
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
`;

const Main = styled.main`
  padding-left: 88px;
  width: 100%;
`;

const ContentContainer = styled.div`
  margin: 8px 8px 0 8px;
`;

export default Layout;
