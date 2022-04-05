import logo from './logo.svg';
import './App.css';

const ToDoList = ['Pingar colírio nos olhos do Hikari (meu gato)', 'Dormir', 'Estudar', 'Não esquecer o remédio para ansiedade :)'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    ToDoList.map((todo) => Task(todo))
  );
}

export default App;
