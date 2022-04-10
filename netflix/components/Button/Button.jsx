import React from 'react';

const Button = ({ children, type, icon, ...other }) => {
  const className = 'button ' + type;
  return (
    <button {...other} className={className}>
      {icon && <span className='button__icon'>{icon}</span>}
      {children}
    </button>
  );
};
export default Button;
