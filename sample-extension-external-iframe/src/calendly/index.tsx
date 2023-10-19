import { ControlButton, Schema, WithControls, bundle } from '@unbounce/smart-builder-sdk';
import React from 'react';

import { CalendlyControlComponent } from '../control';
import { CogIcon } from '../icons/cog-icon';
import { CalendlyViewer } from './calendly-viewer';

const CalendlyComponentWithControls = WithControls(CalendlyViewer, [
  {
    id: 'appSettings',
    label: 'Settings',
    Button: (props) => (
      <ControlButton label="Settings" active={false} {...props}>
        <CogIcon />
      </ControlButton>
    ),
    Panel: (props) => <CalendlyControlComponent {...props} />,
  },
]);

const spacingSchema = {
  paddingTop: { breakpointSpecific: true },
  paddingBottom: { breakpointSpecific: true },
  paddingLeft: { breakpointSpecific: true },
  paddingRight: { breakpointSpecific: true },
};

export const Component = bundle({
  componentTypeId: 'helloAgainWorld',
  displayName: 'helloAgainWorld',
  schema: Schema.object({
    username: Schema.string(),
    height: Schema.number().default(580),
    trackConversion: Schema.formUrl(),
    openContainerLayout: Schema.newStyle({
      display: { breakpointSpecific: true },
      width: { breakpointSpecific: true },
      ...spacingSchema,
    }).default({ width: 'auto' }),
  }),
  Component: CalendlyComponentWithControls,
  tags: ['swappable', 'conversion', 'isFullWidth', 'isFullHeight'],
});
