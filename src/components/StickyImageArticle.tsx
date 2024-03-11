import styled from 'styled-components';

interface ArticleProps {
  children: React.ReactNode;
  images: React.ReactNode;
}

const StickyImageArticle: React.FC<ArticleProps> = ({ children, images }) => {
  return (
    <Container>
      <ScrollingContentContainer>{children}</ScrollingContentContainer>
      <StickyImagesContainer>{images}</StickyImagesContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

const StickyImagesContainer = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: var(--surface-container);
  border-radius: var(--tile-border-radius);
  width: 50%;
  margin: 8px 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
`;

const ScrollingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: var(--margin-section);

  h2 {
    font-size: var(--display-l-font-size);
  }

  p {
    max-width: 60ch;
  }
`;

export default StickyImageArticle;
