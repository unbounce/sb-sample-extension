import React from 'react';
import { component, Schema } from 'ub-shared';

import { HelloWorld } from './components/hello-world';
import { migrations } from './migrations';

const schema = Schema.object({
  firstName: Schema.string().noControls(),
  lastName: Schema.string().groupControls({
    icon: <span>LN</span>,
    label: 'Last Name',
  }),
  styles: Schema.object({
    textAlign: Schema.style('text-align', {
      layoutSpecific: true,
    })
      .withControl('textAlign')
      .withControl('textAlign2'),
  }).mapData((data: any) => Object.values(data).join(' ')),
});

export const Component = component({
  componentTypeId: 'helloWorld', // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: 'HelloWorld',
  schema,
  Component: HelloWorld,
  version: migrations.length,
  migrations,
});
