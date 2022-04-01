import { component, Schema } from 'ub-shared';

import InstantMessenger from './components/instant-messenger';

const schema = Schema.object({
  whatsappId: Schema.string().noControls(),
  telegramId: Schema.string().noControls(),
  chatText: Schema.string().noControls(),
  buttonColorHex: Schema.string().noControls(),
  buttonTextColorHex: Schema.string().noControls(),
});

export const Component = component({
  componentTypeId: 'instantMessenger', // This is the id for your component in our system, must be camelCase. It is used to reference the component in places like templates
  displayName: 'InstantMessenger',
  tags: ['head-script'],
  schema,
  Component: InstantMessenger
});
