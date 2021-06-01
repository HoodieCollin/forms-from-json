import clsx from 'clsx';
import { startCase } from 'lodash';
import { FieldProps } from './field-props';

export interface DateFieldProps extends FieldProps<Date> {}

/**
 * Renders two fields, one for the date and another for the time.
 */
export const DateField = ({
  label,
  readOnly = false,
  value
}: DateFieldProps) => {
  const field = (
    <div className="ffj-grid ffj-grid-cols-12 ffj-gap-2 ffj-max-w-xs">
      <input
        readOnly={readOnly}
        className={clsx(
          'ffj-col-span-5 ffj-rounded',
          readOnly && 'ffj-text-gray-500'
        )}
        type="text"
        defaultValue={value.toLocaleDateString()}
      />
      <input
        readOnly={readOnly}
        className={clsx(
          'ffj-col-span-7 ffj-rounded',
          readOnly && 'ffj-text-gray-500'
        )}
        type="text"
        defaultValue={value.toLocaleTimeString()}
      />
    </div>
  );

  return (
    <div className="__ffj">
      <label className="ffj-mb-1 ffj-block ffj-text-sm ffj-font-medium ffj-text-gray-500">
        {startCase(label)}
      </label>
      {field}
    </div>
  );
};

export default DateField;
