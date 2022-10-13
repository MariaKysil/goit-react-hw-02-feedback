import styled from 'styled-components';

export const Paragraph = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
