import { component, Schema } from 'ub-shared';

import HelloWorld from './components/hello-world';

const schema = Schema.object({
  whatsappId: Schema.string().noControls(),
  telegramId: Schema.string().noControls(),
  buttonColorHex: Schema.string().noControls(),
});

export const Component = component({
  componentTypeId: 'helloWorld', // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: 'HelloWorld',
  tags: ['head-script'],
  schema,
  Component: HelloWorld
});
