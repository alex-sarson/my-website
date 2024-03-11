import styled from 'styled-components';

interface HeroProps {
  title: string;
  children: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ title, children }) => {
  return (
    <Container>
      <Background>
        <h1>{title}</h1>
        {children}
      </Background>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
`;

const Background = styled.div`
  /* width: 100%; */
  padding: 32px;
  border-radius: 24px;
  background-color: var(--surface-container);
  position: relative;
  overflow: hidden;
  font-size: var(--display-xs-font-size);

  @media screen and (min-width: 600px) {
    padding: 56px;
  }

  h1,
  h3 {
    margin: 0;
  }

  p {
    max-width: 60ch;
    margin-bottom: 0;
  }

  img {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;

    &:before {
      content: '';
      position: absolute;
      height: 100%;
      background-color: var(--surface-container);
      border: solid 2px pink;
      width: 20px;
      left: 0;
      top: 0;
    }
  }
`;

export default Hero;
