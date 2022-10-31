import type ReactType from 'react';
import type ReactDomType from 'react-dom';
import type StyledType from 'styled-components';

declare global {
  interface Window {
    react: typeof ReactType;
    reactDom: typeof ReactDomType;
    styled: typeof StyledType;
  }
}
