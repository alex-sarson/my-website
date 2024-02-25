import styled from 'styled-components';
import Section from './Section';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSteam,
  FaSpotify,
} from 'react-icons/fa6';

const Socials: React.FC = () => {
  const items = [
    {
      icon: <FaGithub />,
      link: 'https://github.com/alex-sarson',
      title: 'Github',
      username: '',
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/alex-sarson-553739149/',
      title: 'LinkedIn',
      username: '',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/notdospek/?hl=en',
      title: 'Instagram',
      username: 'notdospek',
    },
    {
      icon: <FaSteam />,
      link: 'https://steamcommunity.com/profiles/76561198073758951/',
      title: 'Steam',
      username: 'Dospek',
    },
    {
      icon: <FaSpotify />,
      link: 'https://open.spotify.com/user/dospek',
      title: 'Spotify',
      username: 'dospek',
    },
  ];

  return (
    <Section>
      <HeaderContainer>
        <h2>My Links</h2>
      </HeaderContainer>
      <SocialsContainer>
        {items.map((item, i) => (
          <SocialItem
            href={item.link}
            target="_blank"
            rel="noreferrer"
            title={item.title}
            key={`socialItem${i}`}
          >
            {item.icon}
          </SocialItem>
        ))}
      </SocialsContainer>
    </Section>
  );
};

const HeaderContainer = styled.div`
  margin: 24px;

  h2 {
    margin: 0;
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialItem = styled.a`
  svg {
    color: var(--surface-container);
    height: 30px;
    width: 30px;

    &:hover,
    &:active {
      color: var(--surface-container-hover);
    }
  }
`;

export default Socials;
