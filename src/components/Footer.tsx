import React from 'react';
import Socials from './Socials';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="my-name">
        <Link to={'/'}>
          <h3>Alex Sarson</h3>
        </Link>
      </div>
      <Socials />
      <h3 className="inspired">
        Inspired by{' '}
        <a
          href="m3.material.io"
          target="_blank"
          rel="noreferrer"
          className="google"
        >
          <FaGoogle />
        </a>
      </h3>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  max-width: var(--article-max-width);
  margin: var(--margin-center);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px solid var(--surface-container);
  align-items: flex-end;
  padding: 40px 0 40px;

  h3 {
    margin-bottom: 0;
  }

  a:hover,
  a > svg:hover {
    color: var(--surface-2);
  }

  & > div.my-name,
  & > h3.inspired {
    width: 300px;
    display: flex;
  }

  a > svg {
    vertical-align: middle;
  }

  a.google > svg {
    margin-bottom: 4px;
  }

  & > h3.inspired {
    text-align: end;
    justify-content: flex-end;
    gap: 6px;
  }
`;

export default Footer;
