// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      numberOfClicks: 0,
      numberOfClicks2: 0,
      numberOfClicks3: 0
    }
    this.callNumber = this.callNumber.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    this.setState((prevState, _props) => ({
      numberOfClicks: prevState.numberOfClicks + 1
    }), () => {
      console.log(`Botão 1 ${this.getBtnColor(this.state.numberOfClicks)}`);
    } )
  }

  handleClick2() {
    this.setState((prevState, _props) => ({
      numberOfClicks2: prevState.numberOfClicks2 +1
    }), () => {
      console.log(`Botão 2 ${this.getBtnColor(this.state.numberOfClicks2)}`);
    })
  }

  handleClick3() {
    this.setState((prevState, _props) => ({
      numberOfClicks3: prevState.numberOfClicks3 +1
    }), () => {
      console.log(`Botão 3 ${this.getBtnColor(this.state.numberOfClicks3)}`);
    } )
  }

  callNumber(number) {
    this.setState({
      numberOfClicks: number
    })
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    // console.log(this);
    const { numberOfClicks, numberOfClicks2, numberOfClicks3 } = this.state;
    return (
      <div>
        <button onClick={this.handleClick} 
        style={{ backgroundColor: this.getBtnColor(numberOfClicks) }}
        >Este botão foi clicado: {this.state.numberOfClicks} vez(es)</button>
        <button onClick={this.handleClick2}
        style={{ backgroundColor: this.getBtnColor(numberOfClicks2) }}
        >Este botão foi clicado: {this.state.numberOfClicks2} vez(es)</button>
        <button onClick={this.handleClick3}
        style={{ backgroundColor: this.getBtnColor(numberOfClicks3) }}
        >E este botão foi clicado: {this.state.numberOfClicks3} vez(es)</button>
      </div>
    )
  }
}

export default App;
