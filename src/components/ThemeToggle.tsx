import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';
import styled from 'styled-components';
import { FaRegMoon, FaRegSun } from 'react-icons/fa6';

const ThemeToggle: React.FC = () => {
  const { darkMode, toggleMode } = useContext(ThemeContext);

  return (
    <Switcher onClick={toggleMode}>
      {darkMode ? <FaRegSun /> : <FaRegMoon />}
      <span>Turn on {darkMode ? 'light' : 'dark'} mode</span>
    </Switcher>
  )
};

const Switcher = styled.button`
  margin: 0 auto 20px;
  text-align: left;
  height: 48px;
  border-radius: var(--mobile-menu-item-border-radius);
  background-color: transparent;
  border: 1px solid var(--surface-container-text);
  color: var(--surface-container-text);
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 960px) {
    border-radius: 50%;
    width: 48px;
    padding: 0;
    justify-content: center;
  }

  svg {
    transform: scale(1.2);
  }

  span {
    @media screen and (min-width: 960px) {
      display: none;
    }
  }

  &:hover {
    background-color: var(--surface-2-container-hover);
  }
`;

export default ThemeToggle;