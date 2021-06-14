import {
  AllHTMLAttributes,
  createContext,
  forwardRef,
  Fragment,
  useCallback,
  useContext
  } from 'react';

export type FieldTypeTuple = [
  (v: any) => boolean,
  (props: any) => JSX.Element | null
];

export type FieldTypes = FieldTypeTuple[];

export interface FieldGroupConfig {
  className?: string;
  fieldTypes: FieldTypes;
}

export const BaseInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input {...props} ref={ref} />
));

export const FieldGroupContext = createContext<FieldGroupConfig>({
  fieldTypes: [[() => true, BaseInput]]
});

export interface FieldGroupProps {
  /**
   * String of class names to apply to the containing `<div />`. Has no effect when the `inline` prop is set to `true`.
   */
  divProps?: AllHTMLAttributes<HTMLDivElement>;
  /**
   * Should the fields be interactive?
   */
  readOnly?: boolean;
  /**
   * Should the fields be returned directly or wrapped in a `<div />`?
   */
  inline?: boolean;
  /**
   * The collection that will correspond to a set of UI Elements. Property keys prefixed with an underscore `_` will not be rendered.
   */
  data: { [key: string]: any };
  /**
   * Override fieldTypes from context
   */
  fieldTypes?: FieldTypes;
}

/**
 * Takes in data and renders the necessary form fields to update that data.
 */
export const FieldGroup = forwardRef<HTMLDivElement, FieldGroupProps>(
  (
    {
      divProps = {},
      readOnly = false,
      inline = false,
      data,
      fieldTypes: fieldTypesFromProps
    },
    ref
  ) => {
    const { fieldTypes } = useContext(FieldGroupContext);

    const renderField = useCallback(
      (value, key) => {
        for (const [typeChecker, Field] of fieldTypesFromProps || fieldTypes) {
          if (typeChecker(value)) {
            return (
              <Field key={key} readOnly={readOnly} value={value} label={key} />
            );
          }
        }

        return null;
      },
      [fieldTypes, fieldTypesFromProps, readOnly]
    );

    if (!data) {
      data = {};
    }

    const fields = Object.keys(data)
      .map((key) => {
        const value = data[key];
        return key[0] === '_' ? null : renderField(value, key);
      })
      .filter(Boolean);

    return inline ? (
      <Fragment>{fields}</Fragment>
    ) : (
      <div ref={ref} {...divProps}>
        {fields}
      </div>
    );
  }
);

export default FieldGroup;
