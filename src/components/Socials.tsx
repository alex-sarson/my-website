import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

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
      icon: <FaEnvelope />,
      link: 'mailto:alex.luke.sarson@gmail.com',
      title: 'Email',
      username: 'alex.luke.sarson@gmail.com',
    },
  ];

  return (
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
  );
};

const SocialsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialItem = styled.a`
  svg {
    color: var(--surface-container-text);
    height: 30px;
    width: 30px;

    &:hover,
    &:active {
      color: var(--surface-container-text);
    }
  }
`;

export default Socials;
