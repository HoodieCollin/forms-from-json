import clsx from 'clsx';
import { isBoolean, isDate, isNumber, isString, map } from 'lodash';
import { createContext, useCallback, useContext } from 'react';
import BooleanField from './boolean';
import DateField from './date';
import { FieldProps } from './field-props';
import NumberField from './number';
import TextField from './text';

export type FieldTypeTuple = [
  (v: any) => boolean,
  (props: FieldProps<any>) => JSX.Element
];

export type FieldTypes = FieldTypeTuple[];

export interface FieldGroupConfig {
  className?: string;
  fieldTypes: FieldTypes;
}

export const FieldGroupContext = createContext<FieldGroupConfig>({
  className: 'ffj-flex ffj-flex-col ffj-space-y-3',
  fieldTypes: [
    [isBoolean, BooleanField],
    [isString, TextField],
    [isNumber, NumberField],
    [isDate, DateField]
  ]
});

export interface FieldGroupProps {
  className?: string;
  /**
   * Should the field be interactive?
   */
  readOnly: boolean;
  /**
   * The collection that will correspond to a set of UI Elements
   */
  data: { [key: string]: any };
}

/**
 * Takes in data and renders the necessary form fields to update that data.
 */
export const FieldGroup = ({
  className: classNameFromProps,
  readOnly,
  data
}: FieldGroupProps) => {
  const { className: classNameFromConfig, fieldTypes } =
    useContext(FieldGroupContext);

  const renderField = useCallback(
    (value, key) => {
      for (const [typeChecker, Field] of fieldTypes) {
        if (typeChecker(value)) {
          return (
            <Field key={key} readOnly={readOnly} label={key} value={value} />
          );
        }
      }

      return null;
    },
    [fieldTypes, readOnly]
  );

  if (!data) {
    data = {};
  }

  return (
    <div className={clsx(classNameFromConfig, classNameFromProps)}>
      {map(data, (value, key) =>
        key[0] === '_' ? null : renderField(value, key)
      ).filter(Boolean)}
    </div>
  );
};

export default FieldGroup;
