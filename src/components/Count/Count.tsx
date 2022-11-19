import React from 'react';
import s from './Count.module.css';

type PropsType = {
  count: number
  newCountValue: () => void
  returnStartCount: () => void;
}

const Count = (props: PropsType) => {
  return (
    <div className={s.count}>
      <div className={s.number}>{props.count}</div>
      <div className={s.buttons}>
        <button className={s.button} onClick={props.newCountValue}>count</button>
        <button className={s.button} onClick={props.returnStartCount}>0</button>
      </div>
    </div>
  )
}

export default Count;
