import styled from 'styled-components';

export const Wrapper = styled.ul`
  & > li {
    font-family: ${p => p.theme.fonts.monospace};
    font-size: ${p => p.theme.fontSizes.m};
  }

  & > li:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;
