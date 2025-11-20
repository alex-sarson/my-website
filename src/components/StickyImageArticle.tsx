import styled from 'styled-components';

interface ArticleProps {
  children: React.ReactNode;
  image: React.ReactNode;
}

const StickyImageArticle: React.FC<ArticleProps> = ({ children, image }) => {
  return (
    <Container>
      <ScrollingContentWrapper>
        <ScrollingContentContainer>{children}</ScrollingContentContainer>
      </ScrollingContentWrapper>
      <StickyImagesContainer>{image}</StickyImagesContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const StickyImagesContainer = styled.div`
  position: sticky;
  top: 8px;
  height: calc(100vh - 16px);
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
const ScrollingContentWrapper = styled.div`
  width: 50%;
`;

const ScrollingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;

  h2 {
    font-size: var(--display-l-font-size);
  }
`;

export default StickyImageArticle;
