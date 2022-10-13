import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding: 10px 15px;
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.background};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  }

  &:hover {
    background: ${p => p.theme.colors.accent};
  }
`;
