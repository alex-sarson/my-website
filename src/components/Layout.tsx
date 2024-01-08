import React from 'react';
import { styled } from 'styled-components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Page>
      <Main>
        {children}
      </Main>
    </Page>
  );
};

const Page = styled.div`
  margin: 8px 8px 0 8px;
`;

const Main = styled.main`

`;

export default Layout;
