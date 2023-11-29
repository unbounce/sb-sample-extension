import type { Manifest } from '@unbounce/smart-builder-sdk';

const manifest: Manifest = {
  appId: '@external/apptest',
  version: '0.1',
  name: 'App Test',
  isSwappable: true,
  type: 'media',
  description: 'App Test',
  iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HelloWorld.svg',
  moreInfoUrl: 'https://en.wikipedia.org/wiki/%22Hello,_World!%22_program',
  categories: ['utility'],
  files: [],
  externalScripts: ['http://localhost:8081/index.js'],
};
export default manifest;
