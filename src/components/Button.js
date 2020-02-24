import React from 'react';
import classNames from 'classnames';

const Button = ({
  large = false,
  secondary = false,
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={classNames(
      'font-bold py-2 px-6 rounded-sm',
      {
        'text-green-900 bg-sand-100': secondary,
        'text-white bg-green-500': !secondary,
      },
      className
    )}
  >
    {children}
  </button>
);

export default Button;
