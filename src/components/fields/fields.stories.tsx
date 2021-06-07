import { Meta } from '@storybook/react';
import { stripIndent } from 'common-tags';
import { FieldGroup, FieldGroupContext, FieldGroupProps } from '.';
import { exemplify } from '../../lib/storybook-tools';

export default {
  title: 'Components/Field Group',
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
          data={{
            foo: 'bar',
            prime: 7,
            time: new Date()
          }}
        />
      `
    },
    {
      description:
        'Control the `readOnly` state of all the components at once.',
      codeExample: stripIndent/*jsx*/ `
        <FieldGroup
          readOnly
          data={{
            foo: 'bar',
            prime: 7,
            time: new Date()
          }}
        />
      `,
      args: {
        ...fieldGroupArgs,
        readOnly: true
      }
    }
  ]
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
