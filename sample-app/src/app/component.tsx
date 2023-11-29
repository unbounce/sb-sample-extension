import { WithControls } from '@unbounce/smart-builder-sdk';
import type { ComponentProps, WithStylesProps } from '@unbounce/smart-builder-sdk';
import React from 'react';
import { WithStyles } from 'ub-shared';

import type { AppProps } from '.';

const Component = (props: ComponentProps<AppProps, WithStylesProps>) => {
  const { fullname } = props.data;
  //TODO: isActive value should come from mode and indicate whether insights is active or not.
  return <div style={{ width: '100px', height: '25px' }}>{fullname}</div>;
};

export const AppComponent = WithStyles<AppProps>(WithControls<AppProps, WithStylesProps>(Component, []), [
  ['styles', ''], // How would the dev know about the Styleguide schema?
  ['openContainerLayout', ''], // This should be hidden, see https://unbounce.atlassian.net/browse/CN-8316
]);
