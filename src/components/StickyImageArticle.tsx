import styled from 'styled-components';
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks';

type ImageType = {
  src: string;
  alt: string;
};

interface ArticleProps {
  children: React.ReactNode;
  images: ImageType[];
}

const StickyImageArticle: React.FC<ArticleProps> = ({ children, images }) => {
  const bodyHeight = document.body.offsetHeight;
  const [{ y }] = useWindowScroll();
  const {height: windowHeight } = useWindowSize();

  return (
    <Container>
      <ScrollingContentWrapper>
        <ScrollingContentContainer>{children}</ScrollingContentContainer>
      </ScrollingContentWrapper>
      <StickyImagesContainer>
        {images.map((image, index) => {
          const heroPadding = 16;
          const heroHeight = 300 + heroPadding;
          const footerHeight = 184;
          const scrollPerImage = (bodyHeight + footerHeight + heroHeight) / images.length;
          const positionOffset = (y ?? 0) + (windowHeight ?? 0 / 2);
          const imageStartPoint = index == 0 ? scrollPerImage * index : (scrollPerImage + heroHeight) * index;
          const imageSwapPoint = (scrollPerImage + heroHeight) * (index + 1);
          const isVisible = imageStartPoint <= positionOffset && positionOffset <= imageSwapPoint;
          return (
            <img key={`stickyImage${index}`} src={image.src} alt={image.alt} className={`hide${isVisible ? ' show' : ''}`}/>
          )
        })}
      </StickyImagesContainer>
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
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.show {
      opacity: 1;
    }
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
