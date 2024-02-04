import styled from 'styled-components';

const Hero: React.FC = () => {
  return (
    <Container>
      <Background>
        <h1>Hello</h1>
        <p>
          I'm Alex Sarson, a self taught Web Developer based in London, UK.
          <br />I love learning new things, solving problems and creating
          beautiful websites!
        </p>
      </Background>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1760px;
  margin: 0 auto;
`;

const Background = styled.div`
  /* width: 100%; */
  padding: 32px;
  border-radius: 24px;
  background-color: var(--surface-container);
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    padding: 56px;
  }

  h1 {
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
