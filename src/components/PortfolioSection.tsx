import styled from "styled-components"
import Section from "./Section"
import Tile from "./Tile"
import Me from "../images/me.png"

const PortfolioSection = () => {
  const tiles = [
    {
      title: "Project 1",
      link: "",
      image: { Me },
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus asperiores obcaecati facere repudiandae aliquam soluta. Natus nulla cumque veniam minus."
    },
    {
      title: "Project 2",
      link: "",
      image: { Me },
      excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptate ad quae debitis, perferendis impedit distinctio quibusdam possimus earum aliquid!"
    }
  ]

  return (
    <Section>
      <HeaderContainer>
        <h2>Portfolio</h2>
      </HeaderContainer>
      <div className="tiles-container">
        {tiles.map((tile, i) => (
          <Tile
            excerpt={tile.excerpt}
            image={tile.image.Me}
            key={`tile${i}`}
            title={tile.title}
          />
        ))}
      </div>
    </Section>
  )
}

const HeaderContainer = styled.div`
  margin: 24px;

  h2 {
    margin: 0;
  }
`

export default PortfolioSection