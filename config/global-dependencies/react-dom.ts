import type ReactDomType from "react-dom";
const reactDom: typeof ReactDomType = window["reactDom"];
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
