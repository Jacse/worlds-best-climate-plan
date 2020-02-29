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
      'font-bold py-2 px-6 rounded-sm transition ease-in-out duration-200',
      {
        'px-8 py-3 text-xl': large,
      },
      {
        'text-green-900 bg-sand-100': secondary,
        'text-white bg-green-500 hover:bg-green-400': !secondary,
      },
      className
    )}
  >
    {children}
  </button>
);

export default Button;
