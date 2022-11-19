import React from 'react';
import './App.css';
import Cars from './components/Cars/Cars';
import Button from './components/Button/Button';

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

function App() {
  const actionSubscribe = (value: string) => {
    console.log(value);
  }

  return (
    <div>
      <Cars cars={topCars}/>
      <div className='buttons'>
        <Button text={'subscribe'} action={() => actionSubscribe('subscribe')}/>
        <Button text={'remove'} action={() => actionSubscribe('remove')}/>
      </div>
    </div>
  );
}

export default App;
