import { Story } from '@storybook/react';
import { isArray, map, set } from 'lodash';

type StoryTemplate<Props> = (args: Props) => JSX.Element;

interface StoryConfig {
  args: any;
  description?: string;
  codeExample?: string;
}

export const exemplify = <P>(
  Template: StoryTemplate<P>,
  configs: StoryConfig | StoryConfig[]
) => {
  return map(
    isArray(configs) ? configs : [configs],
    ({ args = {}, description, codeExample }) => {
      const Component = Template.bind({}) as Story<P>;

      Component.args = args;

      if (description) {
        set(Component, 'parameters.docs.description.story', description);
      }

      if (codeExample) {
        set(Component, 'parameters.docs.source.code', codeExample);
      }

      return Component;
    }
  );
};
