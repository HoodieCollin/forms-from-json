import clsx from 'clsx';
import { _FieldProps } from './_common-props';

export interface BooleanFieldProps extends _FieldProps<boolean> {}

/**
 * A checkbox component.
 */
export const BooleanField = ({
  readOnly = false,
  value
}: BooleanFieldProps) => {
  return (
    <input
      readOnly={readOnly}
      className={clsx('rounded', readOnly && 'text-gray-500')}
      type="checkbox"
      defaultChecked={value}
    />
  );
};

export default BooleanField;
