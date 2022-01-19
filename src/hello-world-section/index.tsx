import section from 'config/global-dependencies/section';

import { HelloWorldTemplate } from './hello-world-template';

export const Template = section({
  contentTypeId: 'helloWorld-section',
  displayName: 'HelloWorld Section',
  tags: ['section'],
  ...HelloWorldTemplate,
});
