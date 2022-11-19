import React, {MouseEvent} from 'react';
import s from './Button.module.css';

type PropsType = {
  text: string
  action: () => void
}

const Button = (props: PropsType) => {
  const actionHandler = (e: MouseEvent<HTMLButtonElement>) => {
    props.action();
  }

  return (
    <button className={s.button} onClick={actionHandler}>{props.text}</button>
  )
}

export default Button;
