import type ReactType from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const react: typeof ReactType = window['react'];
export const {
  version,
  useState,
  Children,
  Component,
  PureComponent,
  cloneElement,
  createContext,
  createElement,
  createFactory,
  createRef,
  forwardRef,
  Fragment,
  isValidElement,
  lazy,
  memo,
  useCallback,
  useContext,
  useDebugValue,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
} = react;
export default react;
