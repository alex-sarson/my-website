import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaHouseChimney,
  FaReadme,
  FaQuoteLeft,
} from 'react-icons/fa6';
import { MdMenuOpen } from 'react-icons/md';
import React, { Dispatch, SetStateAction } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

// Component containing the mapped menu items
const NavInternal: React.FC<NavigationProps> = ({ menuOpen, setMenuOpen }) => {
  const route = useLocation().pathname;

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const NavItems = [
    { name: 'Home', route: '/', icon: <FaHouseChimney /> },
    { name: 'Bio', route: '/bio', icon: <FaQuoteLeft /> },
    { name: 'Resume', route: '/resume', icon: <FaReadme /> },
    // { name: 'Projects', route: '/projects', icon: <FaCode /> },
  ];

  return (
    <NavItemsContainer>
      {NavItems.map((item, i) => (
        <Link
          key={i}
          to={item.route}
          className={item.route == route ? 'active' : ''}
          onClick={handleMenu}
          title={item.name}
        >
          <span>{item.icon}</span>
          <div>{item.name}</div>
        </Link>
      ))}
    </NavItemsContainer>
  );
};

// Parent component rendering both navigation types
const Navigation: React.FC<NavigationProps> = ({ menuOpen, setMenuOpen }) => {
  // TODO: prevent scroll when mobile menu is open

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <MobileModal className={menuOpen ? 'mobileMenuOpen' : ''}>
        <Surface className="mobileSurface">
          <BurgerContainer>
            <Burger onClick={handleMenu} className="mobileMenu-button">
              <MdMenuOpen />
            </Burger>
          </BurgerContainer>

          <NavInternalContainer>
            <NavInternal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <ThemeToggle />
          </NavInternalContainer>
        </Surface>
      </MobileModal>

      <Surface className="desktopSurface">
        <NavInternal menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ThemeToggle />
      </Surface>
    </>
  );
};

const MobileModal = styled.div`
  display: none;
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: var(--scrim);
  z-index: 1;
  opacity: 0;

  &.mobileMenuOpen {
    display: block;
    opacity: 1;

    & > div {
      left: 0;
    }
  }

  @media screen and (min-width: 960px) {
    display: none;
    &.mobileMenuOpen {
      display: none;
    }
  }
`;

const Surface = styled.div`
  background-color: var(--surface-2);
  position: fixed;
  z-index: 8;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: -320px;
  width: 320px;
  border-top-right-radius: var(--surface-container-border-radius);
  border-bottom-right-radius: var(--surface-container-border-radius);

  @media screen and (min-width: 960px) {
    left: 0;
    width: auto;
    border-radius: 0;
    justify-content: space-between;
  }

  &.mobileSurface {
    box-shadow: var(--mobile-menu-box-shadow);
  }
`;

const NavInternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const NavItemsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  width: calc(100% - 16px);

  @media screen and (min-width: 960px) {
    margin: 20px 0 0 0;
    gap: 16px 0;
    width: 88px;
  }

  a {
    color: var(--surface-container-text);
    margin: var(--margin-center);
    width: 100%;
    display: flex;
    align-items: center;
    height: 48px;
    border-radius: var(--mobile-menu-item-border-radius);
    font-size: var(--menu-item-font-size);

    @media screen and (min-width: 960px) {
      display: block;
      width: auto;
      text-align: center;
    }

    span {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 32px;
      border-radius: 16px;
      transition: all ease 0.2s;

      svg {
        transform: scale(1.6);
        transition: all ease 0.2s;
      }
    }

    &:hover {
      background-color: var(--surface-2-container-hover);

      @media screen and (min-width: 960px) {
        background-color: transparent;
      }

      span {
        @media screen and (min-width: 960px) {
          background-color: var(--surface-2-container-hover);
        }
      }
    }

    &.active {
      color: var(--surface-2-container-text-active);
      background-color: var(--surface-2-container-active);

      @media screen and (min-width: 960px) {
        background-color: transparent;
      }

      span {
        @media screen and (min-width: 960px) {
          background-color: var(--surface-2-container-active);
        }
      }

      &:hover {
        background-color: var(--surface-2-container-active-hover);

        @media screen and (min-width: 960px) {
          background-color: transparent;
        }

        span {
          @media screen and (min-width: 960px) {
            background-color: var(--surface-2-container-active-hover);
          }
        }
      }
    }
  }
`;

const BurgerContainer = styled.div`
  padding: 8px 12px;
`;

const Burger = styled.button``;

export default Navigation;
