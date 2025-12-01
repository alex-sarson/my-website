import styled from 'styled-components';
import { useWindowScroll, useWindowSize } from '@uidotdev/usehooks';

type ImageType = {
  src: string;
  alt: string;
  styles?: React.CSSProperties;
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
          const imageName = image.src
            .replace(/^\/src\/images\//, '')
            .replace(/\.[^/.]+$/, '');


          return (
            <img 
              key={`stickyImage${index}`} 
              src={image.src} 
              alt={image.alt} 
              className={`hide${isVisible ? ' show' : ''}`} 
              style={image.styles ?? {}}
              srcSet={
                `/src/images/resized/480/${imageName}-480w.webp 480w,
                /src/images/resized/800/${imageName}-800w.webp 800w,
                /src/images/resized/1200/${imageName}-1200w.webp 1200w,
                /src/images/resized/1400/${imageName}-1400w.webp 1400w`
              }
              sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, (max-width: 1400px) 1200px, 1400px"
            />
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
  display: none;

  @media screen and (min-width: 960px) {
    display: block;
  }

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
  width: 100%;

  @media screen and (min-width: 960px) {
    width: 50%;
  }
`;

const ScrollingContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
`;

export default StickyImageArticle;
