import { Meta, Story } from '@storybook/react';
import FieldGroup, {
  BooleanField,
  BooleanFieldProps,
  DateField,
  DateFieldProps,
  FieldGroupProps,
  NumberField,
  NumberFieldProps,
  TextField,
  TextFieldProps,
} from './fields';

export default {
  title: 'Fields/Field Components',
  component: FieldGroup,
  decorators: [
    (Story) => (
      <div className="md:mx-32 md:my-12">
        <Story />
      </div>
    ),
  ],
  args: {
    readOnly: false,
  },
} as Meta;

const Template = (args: FieldGroupProps) => <FieldGroup {...args} />;

export const Field_Group = Template.bind({}) as Story<FieldGroupProps>;

Field_Group.args = {
  data: {
    foo: 'bar',
    prime: 7,
    time: new Date(),
  },
};

Field_Group.parameters = {
  docs: {
    source: {
      code: /* JSX */ `
<FieldGroup
  readOnly={false}
  data={{
    foo: 'bar',
    prime: 7,
    time: new Date(),
    profileAvatar: createImageAsset()
  }}
/>;`,
    },
  },
};

export const Read_Only = Template.bind({}) as Story<FieldGroupProps>;

Read_Only.parameters = {
  docs: {
    description: {
      story: 'Control the `readOnly` state of all the components at once.',
    },
  },
};

Read_Only.args = {
  ...Field_Group.args,
  readOnly: true,
};

export const Text_Field = ((args: TextFieldProps) => (
  <TextField {...args} />
)).bind({}) as Story<TextFieldProps>;

Text_Field.parameters = {
  docs: {
    description: {
      story: 'Simple text input with no validation.',
    },
  },
};

Text_Field.args = {
  value: 'some generic text',
};

export const Number_Field = ((args: NumberFieldProps) => (
  <NumberField {...args} />
)).bind({}) as Story<NumberFieldProps>;

Number_Field.parameters = {
  docs: {
    description: {
      story: 'Simple number input with no validation.',
    },
  },
};

Number_Field.args = {
  value: 42,
};

export const Boolean_Field = ((args: BooleanFieldProps) => (
  <BooleanField {...args} />
)).bind({}) as Story<BooleanFieldProps>;

Boolean_Field.parameters = {
  docs: {
    description: {
      story: 'Simple checkbox component.',
    },
  },
};

Boolean_Field.args = {
  value: true,
};

export const Date_Field = ((args: DateFieldProps) => (
  <DateField {...args} />
)).bind({}) as Story<DateFieldProps>;

Date_Field.parameters = {
  docs: {
    description: {
      story: 'Breaks dates into two inputs: calander day and time.',
    },
  },
};

Date_Field.args = {
  value: new Date(),
};
