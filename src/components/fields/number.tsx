import clsx from 'clsx';
import { _FieldProps } from './_common-props';

export interface NumberFieldProps extends _FieldProps<number> {
  readOnly?: boolean;
  value: number;
}

/**
 * A generic number input.
 */
export const NumberField = ({ readOnly = false, value }: NumberFieldProps) => {
  return (
    <input
      readOnly={readOnly}
      className={clsx('w-full rounded', readOnly && 'text-gray-500')}
      type="number"
      defaultValue={value}
    />
  );
};

export default NumberField;
