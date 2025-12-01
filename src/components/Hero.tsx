import styled from 'styled-components';

interface HeroProps {
  title: string;
  children: React.ReactNode;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ title, children, image }) => {
  const isLocalHost = window.location.hostname === 'localhost';
  const imageName = image
    .replace(/^\/src\/images\//, '')
    .replace(/\.[^/.]+$/, '');

  const localSrcSet = `
    /src/images/resized/480/${imageName}-480w.webp 480w,
    /src/images/resized/800/${imageName}-800w.webp 800w,
    /src/images/resized/1200/${imageName}-1200w.webp 1200w,
    /src/images/resized/1400/${imageName}-1400w.webp 1400w
  `;
  const srcSet = `
    ${imageName}-480w.webp 480w,
    ${imageName}-800w.webp 800w,
    ${imageName}-1200w.webp 1200w,
    ${imageName}-1400w.webp 1400w
  `;

  return (
    <Container>
      <Background>
        <h1>{title}</h1>
        <p>{children}</p>
        <img 
          src={image} 
          alt={`${title} Background`}
          srcSet={isLocalHost ? localSrcSet : srcSet}
          sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, (max-width: 1400px) 1200px, 1400px"
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
    z-index: 0;
  }
`;

export default Hero;
