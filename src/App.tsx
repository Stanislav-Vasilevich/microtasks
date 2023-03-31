import React, {useState} from 'react';
import './App.css';
import Cars from './components/Cars/Cars';
import Button from './components/Button/Button';
import Count from './components/Count/Count';
import Filter from './components/Filter/Filter';
import FullInput from './components/FullInput/FullInput';
import Input from './components/Input/Input';
import {v1} from 'uuid';
import {Todolist} from './components/TodoList/TodoList';

const topCars = [
  {manufacturer: 'BMW', model: 'm5cs'},
  {manufacturer: 'Mercedes', model: 'e63s'},
  {manufacturer: 'Audi', model: 'rs6'}
]
export type filterType = {
  banknots: string
  value: number
  number: string
}
export type FilterValuesType = 'all' | 'active' | 'completed';
export type todoListsType = {
  id: string
  title: string
  filter: FilterValuesType
}
type taskType = {
  id: string
  title: string
  isDone: boolean
}
type tasksType = {
  [todolistId: string]: Array<taskType>
}

function App() {
  // Понедельник
  let [count, setCount] = useState(0);
  let todolistID1 = v1();
  let todolistID2 = v1();
  let [todoLists, setTodoLists] = useState<Array<todoListsType>>([
    {id: todolistID1, title: 'What to learn', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
    {id: todolistID2, title: 'What to buy', filter: 'all'},
  ]);
  let [tasks, setTasks] = useState<tasksType>({
    [todolistID1]: [
      {id: v1(), title: 'HTML&CSS', isDone: true},
      {id: v1(), title: 'JS', isDone: true},
      {id: v1(), title: 'ReactJS', isDone: false},
      {id: v1(), title: 'Rest API', isDone: false},
      {id: v1(), title: 'GraphQL', isDone: false},
    ],
    [todolistID2]: [
      {id: v1(), title: 'HTML&CSS2', isDone: true},
      {id: v1(), title: 'JS2', isDone: true},
      {id: v1(), title: 'ReactJS2', isDone: false},
      {id: v1(), title: 'Rest API2', isDone: false},
      {id: v1(), title: 'GraphQL2', isDone: false},
    ]
  });

  // Вторник
  const [filter, setFilter] = useState([
    {banknots: 'Dollars', value: 100, number: ' a1234567890'},
    {banknots: 'Dollars', value: 50, number: ' z1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
    {banknots: 'Dollars', value: 100, number: ' e1234567890'},
    {banknots: 'Dollars', value: 50, number: ' c1234567890'},
    {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
    {banknots: 'Dollars', value: 50, number: ' x1234567890'},
    {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
  ]);
  const [valueFilter, setValueFilter] = useState('all');
  const [messages, setMessages] = useState([
    {id: 1, text: 'Hello friend'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'Where are you?'}
  ]);
  const [input, setInput] = useState('');

  // Понедельник
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
  if (valueFilter === 'Dollars') {
    currentFilterValue = filter.filter(i => i.banknots === 'Dollars');
  }
  if (valueFilter === 'RUBLS') {
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

   // Вторник
  function addTask(todolistId: string, title: string) {
    const task = {id: v1(), title: title, isDone: false};
    tasks[todolistId] = [task, ...tasks[todolistId]];
    setTasks({...tasks});
  }

  function removeTask(todolistId: string, TaskId: string) {
    let filteredTasks = tasks[todolistId].filter(t => t.id != TaskId);

    setTasks({...tasks, [todolistId]: filteredTasks});
  }

  function changeTaskStatus(todolistId: string, taskId: string, isDone: boolean) {
    let task = tasks[todolistId].find(t => t.id === taskId);
    if (task) {
      task.isDone = isDone;
    }

    setTasks({...tasks});
  }

  return (
    <div className={'container'}>
      {/* Занятия понедельник */}
      <section className={'section'}>
        <h1 className={'title_main'}>Micro tasks</h1>
        <h2 className={'title title_default'}>Понедельник</h2>
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
      </section>

      {/* Занятия вторник */}
      <section className={'section'}>
        <h2 className={'title'}>Вторник</h2>
        <div className="row">
          {
            todoLists.map(t => {
              let tasksForTodolist = tasks[t.id];

              if (t.filter === 'active') {
                tasksForTodolist = tasks[t.id].filter(t => !t.isDone);
              }
              if (t.filter === 'completed') {
                tasksForTodolist = tasks[t.id].filter(t => t.isDone);
              }

              function changeFilter(todoListId: string, value: FilterValuesType) {
                const todoList = todoLists.find(t => t.id === todoListId);
                if(todoList) {
                  todoList.filter = value;
                }

                setTodoLists([...todoLists]);
              }

              return (
                <Todolist
                  key={t.id}
                  todoListId = {t.id}
                  title={t.title}
                  filter={t.filter}
                  tasks={tasksForTodolist}
                  removeTask={removeTask}
                  addTask={addTask}
                  changeTaskStatus={changeTaskStatus}
                  changeFilter={changeFilter}
                />
              )
            })
          }
        </div>
      </section>
    </div>
  );
}

export default App;
