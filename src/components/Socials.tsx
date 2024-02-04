import styled from 'styled-components';
import Section from './Section';

const Socials: React.FC = () => {
  const items = [
    {
      icon: '',
      link: '',
      title: '',
    },
  ];

  return (
    <Section>
      <HeaderContainer>
        <h2>My Links</h2>
      </HeaderContainer>
    </Section>
  );
};

const HeaderContainer = styled.div`
  margin: 24px;

  h2 {
    margin: 0;
  }
`;

export default Socials;
