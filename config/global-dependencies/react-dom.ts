import type ReactDomType from 'react-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const reactDom: typeof ReactDomType = window['reactDom'];
export const {
  version,
  render,
  hydrate,
  findDOMNode,
  unmountComponentAtNode,
  createPortal,
  flushSync,
  unstable_batchedUpdates,
  unstable_renderSubtreeIntoContainer,
} = reactDom;
export default reactDom;
