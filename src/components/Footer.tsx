import React from 'react';
import Socials from './Socials';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="copy">
        <Link to={'/'}>
          <h3>Alex Sarson</h3>
        </Link>
        <p className="inspired">
          Inspired by{' '}
          <a
            href="m3.material.io"
            target="_blank"
            rel="noreferrer"
            className="google"
          >
            <FaGoogle />
          </a>
        </p>
      </div>
      <Socials />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  max-width: var(--article-max-width);
  margin: var(--margin-center);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 2px solid var(--surface-container);
  align-items: flex-start;
  padding: 40px 0;
  gap: 2rem;

  @media screen and (min-width: 576px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 0;
  }

  div:first-of-type {
    margin-left: 20px;
  }

  div:last-of-type {
    margin-left: 20px;

    @media screen and (min-width: 576px) {
      margin: 0 20px 0 0;
    }
  }

  h3 {
    margin-bottom: 0;
  }

  a:hover,
  a > svg:hover {
    color: var(--surface-2);
  }

  div.copy,
  p.inspired {
    width: 300px;
    display: flex;
  }

  div.copy {
    flex-direction: column;
  }

  a > svg {
    vertical-align: middle;
  }

  a.google > svg {
    margin-bottom: 4px;
  }

  p.inspired {
    text-align: end;
    gap: 6px;
    margin: 0;
  }
`;

export default Footer;
