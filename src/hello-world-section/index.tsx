import { section } from 'ub-shared';

import { HelloWorldTemplate } from './hello-world-template';

export const Template = section({
  contentTypeId: 'helloWorld-section',
  displayName: 'HelloWorld Section',
  tags: ['section'],
  ...HelloWorldTemplate,
});
