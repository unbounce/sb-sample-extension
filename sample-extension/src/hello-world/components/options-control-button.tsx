import React from 'react';
import { ControlButton } from 'smart-builder-sdk';
import { ControlButtonProps } from 'unbounce-smart-builder-sdk-types';

import { CogIcon } from '../icons/cog-icon';

export function OptionsControlButton<T>(props: ControlButtonProps<T, { label: string }>) {
  return (
    <ControlButton active={false} {...props}>
      <CogIcon />
    </ControlButton>
  );
}
