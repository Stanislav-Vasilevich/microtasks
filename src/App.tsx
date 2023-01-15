import React, {ChangeEvent, useState} from 'react';
import './App.css';
import Cars from './components/Cars/Cars';
import Button from './components/Button/Button';
import Count from './components/Count/Count';
import Filter from './components/Filter/Filter';
import FullInput from "./components/FullInput/FullInput";
import Input from "./components/Input/Input";

const topCars = [
  {manufacturer:'BMW', model:'m5cs'},
  {manufacturer:'Mercedes', model:'e63s'},
  {manufacturer:'Audi', model:'rs6'}
]

export type filterType = {
  banknots: string
  value: number
  number: string
}

function App() {
  let [count, setCount] = useState(0);

  const [filter, setFilter] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ]);

  const [valueFilter, setValueFilter] = useState('all');

	const [messages, setMessages] = useState([
		{id: 1, text: 'Hello friend'},
		{id: 2, text: 'How are you?'},
		{id: 3, text: 'Where are you?'}
	]);

	const [input, setInput] = useState('');

  const actionSubscribe = (value: string) => {
    console.log(value);
  }

  const newCountValue = () => {
    setCount(++count);
  }

  const returnStartCount = () => {
    setCount(0);
  }

  let currentFilterValue = filter;

  if(valueFilter === 'Dollars') {
    currentFilterValue = filter.filter(i => i.banknots === 'Dollars');
  }
  if(valueFilter === 'RUBLS') {
    currentFilterValue = filter.filter(i => i.banknots === 'RUBLS');
  }

  const filterMoney = (value: string) => {
    setValueFilter(value);
  }

	const onClickAddMessage = (message: string) => {
		const newMessage = {
			id: 4,
			text: message
		}
		setMessages([newMessage, ...messages]);
	}

	const getInputValue = (message: string) => {
		setInput(message);
	}

	const onClickAddMessageButton = () => {
		const newMessage = {
			id: 5,
			text: input
		}
		setMessages([newMessage, ...messages]);
		setInput('');
	}

  return (
    <div className={'container'}>
      <div className={'cars'}>
        <Cars cars={topCars}/>
      </div>
      <div className={'buttons'}>
        <Button text={'subscribe'} action={() => actionSubscribe('subscribe')}/>
        <Button text={'remove'} action={() => actionSubscribe('remove')}/>
      </div>
      <div className={'count'}>
        <Count returnStartCount={returnStartCount} count={count} newCountValue={newCountValue}/>
      </div>

      <div className={'filter'}>
        <Filter filter={currentFilterValue} filterMoney={filterMoney}/>
      </div>

			<div className={'messages'}>
				<FullInput
					onClickAddMessage={onClickAddMessage}
				/>
				<Input getInputValue={getInputValue} value={input}/>
				<Button text={'+'} action={onClickAddMessageButton}/>
				<ul>
					{messages.map(i => {
						return <li key={i.id}>{i.text}</li>
					})}
				</ul>
			</div>
    </div>
  );
}

export default App;
