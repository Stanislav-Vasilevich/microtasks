import React from 'react';
import s from './Cars.module.css';

type CarsType = {
  manufacturer: string
  model: string
}

type PropsType = {
  cars: Array<CarsType>
}

const Cars = (props: PropsType) => {
  return (
    <table className={s.table}>
      <thead>
      <tr className={s.tr}>
        <th className={s.item}>Manufacturer</th>
        <th className={s.item}>Model</th>
      </tr>
      </thead>
      <tbody>
      {props.cars.map((i, index) => {
        return (
          <tr className={s.tr} key={index}>
            <td className={s.item}>{i.manufacturer}</td>
            <td className={s.item}>{i.model}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}
export default Cars;
