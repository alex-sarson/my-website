import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaHouseChimney } from 'react-icons/fa6';
import { Dispatch, SetStateAction } from 'react';

interface MobileHeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  menuOpen,
  setMenuOpen,
}) => {
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Surface>
      <Burger onClick={handleMenu} className="mobileMenu-button" aria-label="Open menu">
        <MdMenu />
      </Burger>
      <Link to={'/'}>
        <FaHouseChimney />
        <span>Alex Sarson</span>
      </Link>
    </Surface>
  );
};

const Surface = styled.header`
  width: 100%;
  background-color: var(--surface-mobile-header);
  position: fixed;
  z-index: 10;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 8px 12px;

  @media screen and (min-width: 960px) {
    display: none;
  }

  a {
    padding: 0 12px;
    display: flex;
    align-items: center;

    span {
      margin-left: 16px;
    }

    svg {
      height: 18px;
      width: 18px;
    }
  }
`;

const Burger = styled.button``;

export default MobileHeader;
