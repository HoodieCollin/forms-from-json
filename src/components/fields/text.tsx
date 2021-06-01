import clsx from 'clsx';

export interface TextFieldProps {
  readOnly?: boolean;
  value: string;
}

/**
 * A generic text input.
 */
export const TextField = ({ readOnly = false, value }: TextFieldProps) => {
  return (
    <input
      readOnly={readOnly}
      className={clsx('w-full rounded', readOnly && 'text-gray-500')}
      type="text"
      defaultValue={value}
    />
  );
};

export default TextField;
