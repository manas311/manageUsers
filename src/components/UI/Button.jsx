import React from 'react';
import classes from './button.module.css'

const Button = (props) => {
  return (
    <>
    <button type={props.type} className={classes.button || 'button'} onClick={props.onClick}>{props.children}</button>
    </>
  )
}

export default Button