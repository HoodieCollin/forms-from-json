import clsx from 'clsx';
import { _FieldProps } from './_common-props';

export interface DateFieldProps extends _FieldProps<Date> {}

/**
 * Renders two fields, one for the date and another for the time.
 */
export const DateField = ({ readOnly = false, value }: DateFieldProps) => {
  return (
    <div className="grid grid-cols-12 gap-2 max-w-xs">
      <input
        readOnly={readOnly}
        className={clsx('col-span-5 rounded', readOnly && 'text-gray-500')}
        type="text"
        defaultValue={value.toLocaleDateString()}
      />
      <input
        readOnly={readOnly}
        className={clsx('col-span-7 rounded', readOnly && 'text-gray-500')}
        type="text"
        defaultValue={value.toLocaleTimeString()}
      />
    </div>
  );
};

export default DateField;
