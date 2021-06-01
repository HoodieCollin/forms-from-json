import { Meta } from '@storybook/react';
import { stripIndent } from 'common-tags';
import {
  BooleanField,
  BooleanFieldProps,
  DateField,
  DateFieldProps,
  FieldGroup,
  FieldGroupContext,
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
    time: new Date(2017, 10, 30)
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
            time: new Date()
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

export const [Overrides_Via_React_Context] = exemplify<FieldGroupProps>(
  (args) => (
    <FieldGroupContext.Provider
      value={{
        fieldTypes: [
          [
            (s) => typeof s === 'string',
            ({ value, ...props }) => (
              <input type="text" defaultValue={value} {...props} />
            )
          ],
          [
            (n) => typeof n === 'number',
            ({ value, ...props }) => (
              <input type="number" defaultValue={value} {...props} />
            )
          ]
          // other checkers...
        ]
      }}
    >
      <FieldGroup {...args} />
    </FieldGroupContext.Provider>
  ),
  {
    description:
      'The Field components rendered by the FieldGroup can be configured via React Context.',
    args: fieldGroupArgs,
    codeExample: stripIndent/*jsx*/ `
      const fieldTypes = [
        [
          (s) => typeof s === 'string',
          ({ value, ...props }) => (
            <input type="text" defaultValue={value} {...props} />
          )
        ],
        [
          (n) => typeof n === 'number',
          ({ value, ...props }) => (
            <input type="number" defaultValue={value} {...props} />
          )
        ]
        // other checkers...
      ];

      // ...

      <FieldGroupContext.Provider value={{ fieldTypes }}>
        <FieldGroup
          data={{
            foo: 'bar',
            prime: 7,
            time: new Date()
          }}
        />
      </FieldGroupContext.Provider>
    `
  }
);
