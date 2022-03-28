export type { AuthState, Manifest, PaginateData, UIEventLogParams } from 'smart-builder-sdk';

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
} = window['smartBuilderSdk'];

export default window['smartBuilderSdk'];
