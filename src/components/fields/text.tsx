import clsx from 'clsx';
import { startCase } from 'lodash';
import { FieldProps } from './field-props';

export interface TextFieldProps extends FieldProps<string> {}

/**
 * A generic text input.
 */
export const TextField = ({
  label,
  readOnly = false,
  value
}: TextFieldProps) => {
  const field = (
    <input
      readOnly={readOnly}
      className={clsx(
        'ffj-w-full ffj-rounded',
        readOnly && 'ffj-text-gray-500'
      )}
      type="text"
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

export default TextField;
