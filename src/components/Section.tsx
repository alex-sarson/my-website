import React from "react"
import styled from "styled-components"

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.section`
  margin: 80px 0;

  @media screen and (min-width: 992px) {
    margin: 96px 0;
  }
`

export default Section;