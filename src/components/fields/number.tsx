import clsx from 'clsx';
import { startCase } from 'lodash';
import { FieldProps } from './field-props';

export interface NumberFieldProps extends FieldProps<number> {}

/**
 * A generic number input.
 */
export const NumberField = ({
  label,
  readOnly = false,
  value
}: NumberFieldProps) => {
  const field = (
    <input
      readOnly={readOnly}
      className={clsx(
        'ffj-w-full ffj-rounded',
        readOnly && 'ffj-text-gray-500'
      )}
      type="number"
      defaultValue={value}
    />
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

export default NumberField;
