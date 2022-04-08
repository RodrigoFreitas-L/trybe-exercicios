// import logo from './logo.svg';
import React from 'react';
import './App.css';



class App extends React.Component {
  handleClick = () => {
    console.log('Clicou!');
  }
  
  handleClick2 = () => {
    console.log('Ayaya');
  }
  handleClick3 = () => {
    console.log('ò.ó');
  }
  render() {
    return (<div>
        <button onClick={ this.handleClick }>Botão</button>
        <button onClick={ this.handleClick2 }>Botão2</button>
        <button onClick={ this.handleClick3 }>Botão3</button>
    </div>
    )
  }
}

export default App;
