import type ReactType from "react";
const react: typeof ReactType = window["react"];

export const { ...test } = { ...react };
export default react;
