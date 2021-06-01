import clsx from 'clsx';

export interface BooleanFieldProps {
  readOnly?: boolean;
  value: boolean;
}

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
