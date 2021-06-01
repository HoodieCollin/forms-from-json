import { Meta } from '@storybook/react';
import { stripIndent } from 'common-tags';
import {
  BooleanField,
  BooleanFieldProps,
  DateField,
  DateFieldProps,
  FieldGroup,
  FieldGroupProps,
  NumberField,
  NumberFieldProps,
  TextField,
  TextFieldProps
} from '.';
import { exemplify } from '../../lib/storybook-tools';

export default {
  title: 'Fields/Field Components',
  component: FieldGroup,
  decorators: [
    (Story) => (
      <div className="md:mx-32 md:my-12">
        <Story />
      </div>
    )
  ],
  args: {
    readOnly: false
  }
} as Meta;

const fieldGroupArgs = {
  data: {
    foo: 'bar',
    prime: 7,
    time: new Date()
  }
};

export const [Field_Group, Read_Only] = exemplify<FieldGroupProps>(
  (args) => <FieldGroup {...args} />,
  [
    {
      args: fieldGroupArgs,
      codeExample: stripIndent/*jsx*/ `
        <FieldGroup
          readOnly={false}
          data={{
            foo: 'bar',
            prime: 7,
            time: new Date(),
            profileAvatar: createImageAsset()
          }}
        />;`
    },
    {
      description:
        'Control the `readOnly` state of all the components at once.',
      args: {
        ...fieldGroupArgs,
        readOnly: true
      }
    }
  ]
);

export const [Text_Field] = exemplify<TextFieldProps>(
  (args) => <TextField {...args} />,
  {
    description: 'Simple text input with no validation.',
    args: {
      value: 'some generic text'
    }
  }
);

export const [Number_Field] = exemplify<NumberFieldProps>(
  (args) => <NumberField {...args} />,
  {
    description: 'Simple number input with no validation.',
    args: {
      value: 42
    }
  }
);

export const [Boolean_Field] = exemplify<BooleanFieldProps>(
  (args) => <BooleanField {...args} />,
  {
    description: 'Simple checkbox component.',
    args: {
      value: true
    }
  }
);

export const [Date_Field] = exemplify<DateFieldProps>(
  (args) => <DateField {...args} />,
  {
    description: 'Breaks dates into two inputs: calander day and time.',
    args: {
      value: new Date()
    }
  }
);
