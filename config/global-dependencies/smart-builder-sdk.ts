import type SmartBuilderSdkType from 'smart-builder-sdk';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const smartBuilderSdk: typeof SmartBuilderSdkType = window['smartBuilderSdk'];

export type { AuthState, Manifest, UIEventLogParams, PaginateData } from 'smart-builder-sdk';

export const {
  useApiRequest,
  SdkProvider,
  OAuthProvider,
  useOAuthContext,
  getAfterFormSubmitScript,
  Script,
  createUIEventTracking,
  usePaginateResults,
  useImageGalleryContext,
  useImageGallery,
} = smartBuilderSdk;

export default smartBuilderSdk;
