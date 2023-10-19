import { ControlButton, ControlButtonProps } from '@unbounce/smart-builder-sdk';
import React from 'react';

import { CogIcon } from '../icons/cog-icon';

export function OptionsControlButton<T>(props: ControlButtonProps<T, { label: string }>) {
  return (
    <ControlButton active={false} {...props}>
      <CogIcon />
    </ControlButton>
  );
}
