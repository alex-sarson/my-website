import styled from 'styled-components';
import ResponsiveImage from './ResponsiveImage';

interface HeroProps {
  title: string;
  children: React.ReactNode;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, children, image }) => {

  return (
    <Container>
      <Background>
        <h1>{title}</h1>
        <p>{children}</p>
        <ResponsiveImage
          image={image}
          title={`${title} Background Image`}
        />
      </Background>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
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
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1,
  h3 {
    margin: 0;
  }

  p {
    max-width: 60ch;
    margin: 0;
  }

  h1,
  h3,
  p {
    position: relative;
    z-index: 2;
  }

  img {
    position: absolute;
    height: 100%;
    right: 0;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    object-position: top;
    z-index: 0;
  }
`;

export default Hero;
