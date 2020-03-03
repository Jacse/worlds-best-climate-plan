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
      'font-bold py-2 px-4 rounded-sm transition ease-in-out duration-200',
      {
        'px-8 py-3 text-xl': large,
      },
      {
        'text-green-900 bg-sand-200 hover:bg-sand-300': secondary,
        'text-white bg-green-500 hover:bg-green-600': !secondary,
      },
      className
    )}
  >
    <span className="inline-block" style={{ transform: 'translateY(1px)' }}>
      {children}
    </span>
  </button>
);

export default Button;
