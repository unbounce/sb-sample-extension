// import type { Manifest } from "../../smart-builder-sdk/src/types";

export default {
  extensionId: "@external/foobar",
  version: "0.1",
  name: "Foobar",
  description: "Something Something",
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Foobar2000_logo_2014.svg",
  moreInfoUrl: "https://www.google.com/",
  categories: ["text"],
  include: [],
  externalScripts: [
    "http://localhost:8081/foobar-ext.js",
    "http://localhost:8081/foobar-section.js",
  ],
};
