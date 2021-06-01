import clsx from 'clsx';
import { startCase } from 'lodash';
import { FieldProps } from './field-props';

export interface BooleanFieldProps extends FieldProps<boolean> {}

/**
 * A checkbox component.
 */
export const BooleanField = ({
  label,
  readOnly = false,
  value
}: BooleanFieldProps) => {
  const field = (
    <input
      readOnly={readOnly}
      className={clsx('ffj-rounded', readOnly && 'ffj-text-gray-500')}
      type="checkbox"
      defaultChecked={value}
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

export default BooleanField;
