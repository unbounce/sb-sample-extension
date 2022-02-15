import type SmartBuilderSdkType from 'smart-builder-sdk';

const smartBuilderSdk: typeof SmartBuilderSdkType = window['smartBuilderSdk'];

export type { AuthState, Manifest, ExtensionType, UIEventLogParams, PaginateData } from 'smart-builder-sdk';

export const {
  useApiRequest,
  SdkProvider,
  OAuthProvider,
  useOAuthContext,
  useExtensionOauth,
  getAfterFormSubmitScript,
  Script,
  createUIEventTracking,
  usePaginateResults,
  useImageGalleryContext,
  useImageGallery,
} = smartBuilderSdk;

export default smartBuilderSdk;
