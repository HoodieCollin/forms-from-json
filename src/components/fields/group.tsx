import { isBoolean, isDate, isNumber, isString, map, startCase } from 'lodash';
import { createContext, useCallback, useContext } from 'react';
import BooleanField from './boolean';
import DateField from './date';
import NumberField from './number';
import TextField from './text';
import { _FieldProps } from './_common-props';

export type FieldTypeTuple = [
  (v: any) => boolean,
  (props: _FieldProps<any>) => JSX.Element
];

export type FieldTypes = FieldTypeTuple[];

export const FieldGroupContext = createContext<FieldTypes>([
  [isBoolean, BooleanField],
  [isString, TextField],
  [isNumber, NumberField],
  [isDate, DateField]
]);

export interface FieldGroupProps {
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
export const FieldGroup = ({ readOnly, data }: FieldGroupProps) => {
  const fieldTypes = useContext(FieldGroupContext);

  const renderField = useCallback(
    (value) => {
      for (const [typeChecker, Field] of fieldTypes) {
        if (typeChecker(value)) {
          return <Field key={value} readOnly={readOnly} value={value} />;
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
    <div className="flex flex-col space-y-3">
      {map(data, (value, key) =>
        key[0] === '_' ? null : (
          <div key={key} className="">
            <label className="mb-1 block text-sm font-medium text-gray-500">
              {startCase(key)}
            </label>
            {renderField(value)}
          </div>
        )
      ).filter(Boolean)}
    </div>
  );
};

export default FieldGroup;
