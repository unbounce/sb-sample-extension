import React from 'react';
import { ControlPanelProps } from 'unbounce-smart-builder-sdk-types';

import { StyledLabelConversion, StyledToggle } from '../styled';
import { DataStructure } from './hello-world';

export const Panel = ({ data: { tracking }, dispatch }: ControlPanelProps<DataStructure>) => {
  const toggleTracking = (newVal: boolean) => {
    dispatch((api: any) => api.get('tracking').toggleTrackingEnabled(newVal));
  };
  return (
    <StyledLabelConversion>
      Conversion Tracking
      <StyledToggle value={tracking.trackingEnabled} onClick={() => toggleTracking(!tracking.trackingEnabled)} />
    </StyledLabelConversion>
  );
};
