// import 'smart-builder-sdk-types'; breaks the build so it needs to be imported this way even if not used.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line
import type smartBuilderSdkTypes from 'smart-builder-sdk-types';

export const {
  useApiRequest,
  SdkProvider,
  OAuthProvider,
  useOAuthContext,
  useAppOauth,
  getAfterFormSubmitScript,
  createUIEventTracking,
  usePaginateResults,
  useImageGalleryContext,
  Script,
  WithControls,
  WithStyles,
  ControlButton,
  useImageGallery,
} = window['smartBuilderSdk'];

export default window['smartBuilderSdk'];
