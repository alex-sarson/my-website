import styled from "styled-components";

export const ArticleDivider: React.FC = () => {
  return <Divider />;
};

export const ArticleSpacer: React.FC = () => {
  return <Spacer />;
}

const Divider = styled.div`
  height: var(--divider-width);
  width: var(--divider-width);
  background-color: var(--theme-colour-primary);
  border-radius: 50%;
  margin: var(--divider-margin);
`;

const Spacer = styled.div`
  height: var(--spacer-height);
`;

