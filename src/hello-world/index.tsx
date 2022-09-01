import { component, Schema } from 'ub-shared';

import HelloWorld from './components/hello-world';
import { migrations } from './migrations';

const schema = Schema.object({
  fullname: Schema.string().default('Noah Anderson'), // Optional: You can set defualt values to your schema properties
  isButtonSet: Schema.boolean().default(false),
  styles: Schema.newStyle({
    textAlign: {
      layoutSpecific: true,
    },
  }),
});

export const Component = component({
  componentTypeId: 'helloWorld', // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: 'HelloWorld',
  tags: ['newControls', 'swappable', 'isFullWidth'], // You can add "isFullWidth" to make your app have 100% of width, without this option the "Align Element Settings" control will be added
  schema,
  Component: HelloWorld,
  version: migrations.length,
  migrations,
});
