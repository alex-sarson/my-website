import styled from "styled-components";

interface SkillsProps {
  skills?: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        {skills?.map((skill, i) => (
          <Skill key={i}>
            <p>
              {skill}
            </p>
          </Skill>
        ))}
      </SkillsContainer>
    </SkillsWrapper>
  );
}

export default Skills;

const SkillsWrapper = styled.div`
  margin: var(--margin-skills-wrapper);
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: var(--grid-template-columns-skills-container);
  grid-gap: 8px;
`

const Skill = styled.div`
  background-color: var(--surface-container);
  color: var(--surface-container-text);
  border-radius: var(--tile-border-radius);

  p {
    margin: var(--margin-skills) !important;
    font-family: 'Product Sans Bold', sans-serif;
    white-space: nowrap;
  }
`;