import React from 'react';
import {filterType} from '../../App';
import s from './Filter.module.css';

type PropsType = {
  filter: Array<filterType>
  filterMoney: (value: string) => void
}

const Filter = (props: PropsType) => {
  const filterMoneyHandler = (value: string) => {
    props.filterMoney(value);
  }

  return (
    <div className={s.filter}>
      <div className={s.buttons}>
        <button className={s.button} onClick={() => filterMoneyHandler('all')}>All</button>
        <button className={s.button} onClick={() => filterMoneyHandler('Dollars')}>Dollars</button>
        <button className={s.button} onClick={() => filterMoneyHandler('RUBLS')}>RUBLS</button>
      </div>
      <ul className={s.list}>
        {props.filter.map((i, index) => {
          return (
            <li className={s.item} key={index}>{`${++index}. ${i.value} ${i.banknots}`}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Filter;
