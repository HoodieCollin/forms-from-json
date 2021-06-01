import { isBoolean, isDate, isNumber, isString, map, startCase } from 'lodash';
import BooleanField from './boolean';
import DateField from './date';
import NumberField from './number';
import TextField from './text';

export * from './boolean';
export * from './date';
export * from './number';
export * from './text';

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
            {isString(value) ? (
              <TextField readOnly={readOnly} value={value} key={value} />
            ) : isNumber(value) ? (
              <NumberField readOnly={readOnly} value={value} key={value} />
            ) : isBoolean(value) ? (
              <BooleanField
                readOnly={readOnly}
                value={value}
                key={value.toString()}
              />
            ) : isDate(value) ? (
              <DateField
                readOnly={readOnly}
                value={value}
                key={value.toISOString()}
              />
            ) : null}
          </div>
        )
      ).filter(Boolean)}
    </div>
  );
};

export default FieldGroup;
