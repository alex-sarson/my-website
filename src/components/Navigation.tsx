import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import {
  FaHouseChimney,
  FaReadme,
  FaCode,
  FaQuoteLeft,
  FaRegSun,
} from 'react-icons/fa6';

const Navigation: React.FC = () => {
  const route = useLocation().pathname;

  const NavItems = [
    { name: 'Home', route: '/', icon: <FaHouseChimney /> },
    { name: 'Bio', route: '/bio', icon: <FaQuoteLeft /> },
    { name: 'Resume', route: '/resume', icon: <FaReadme /> },
    { name: 'Projects', route: '/projects', icon: <FaCode /> },
  ];

  return (
    <Surface>
      <NavItemsContainer>
        {NavItems.map((item, i) => (
          <Link
            key={i}
            to={item.route}
            className={item.route == route ? 'active' : ''}
          >
            <span>{item.icon}</span>
            <div>{item.name}</div>
          </Link>
        ))}
      </NavItemsContainer>
      <ThemeSwitcher>
        <FaRegSun />
      </ThemeSwitcher>
    </Surface>
  );
};

const Surface = styled.div`
  background-color: var(--surface-2);
  position: fixed;
  z-index: 8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const NavItemsContainer = styled.nav`
  width: 88px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 14px 0;

  a {
    color: var(--surface-container-text);
    margin: var(--margin-center);
    text-align: center;

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
        transform: scale(1);
        transition: all ease 0.2s;
      }
    }

    &:hover {
      span {
        background-color: var(--surface-2-container-hover);

        svg {
          transform: scale(1.1);
        }
      }
    }

    &.active {
      color: var(--surface-2-container-text-active);

      span {
        background-color: var(--surface-2-container-active);
      }

      &:hover {
        span {
          background-color: var(--surface-2-container-active-hover);
        }
      }
    }
  }
`;

const ThemeSwitcher = styled.button`
  background-color: pink;
  margin-bottom: 20px;
`;

export default Navigation;
