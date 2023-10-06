import { Schema } from '@unbounce/smart-builder-sdk';
// Ideally imported via sdk depedency
import { component } from 'ub-shared';

import { AppComponent } from './component';
import { migrations } from './migrations';
import { activeSchema, borderSchema, hoverSchema, marginSchema, paddingSchema, typographySchema } from './schemas';

const appSchema = Schema.object({
  fullname: Schema.string().default('TEST'), // Optional: You can set defualt values to your schema properties
  isButtonSet: Schema.boolean().default(false),
  tracking: Schema.formUrl(), // We use this property for the conversion tracking
  styles: Schema.newStyle({
    // "New Style" schema is required for the "Design Settings" control to work
    ...typographySchema,
    ...paddingSchema,
    ...marginSchema,
    ...borderSchema,
    hover: { ...hoverSchema },
    active: { ...activeSchema },
  }),
  openContainerLayout: Schema.newStyle({
    width: { breakpointSpecific: true },
    display: { breakpointSpecific: true },
    paddingTop: { breakpointSpecific: true },
    paddingBottom: { breakpointSpecific: true },
    paddingLeft: { breakpointSpecific: true },
    paddingRight: { breakpointSpecific: true },
  }).default({ width: 'auto', paddingTop: '0', paddingBottom: '0', paddingLeft: '0', paddingRight: '0' }),
});

export type AppProps = typeof appSchema.componentPropsType['data'];

export const Component = component({
  componentTypeId: 'apptest',
  displayName: 'App Test',
  tags: ['swappable'], // Need tag documentation
  schema: appSchema,
  Component: AppComponent,
  version: migrations.length,
  migrations,
});
