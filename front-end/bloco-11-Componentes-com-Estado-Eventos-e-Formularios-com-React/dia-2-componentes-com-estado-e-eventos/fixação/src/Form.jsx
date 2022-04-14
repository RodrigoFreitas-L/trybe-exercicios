import React from 'react';
import AboutUser from './AboutUser';
import UserChoise from './UserChoise';
import UserInfo from './UserInfo';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.eventHandler = this.eventHandler.bind(this);

    this.state = {
      aboutUser: '',
      nome: '',
      age: '',
      trybeStudent: false,
      selectDifficult: '',
    }
  }

  eventHandler(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value})
  }

  render() {
    return (
      <div>
        <h1>Formulário!</h1>
        <form>
          <fieldset>
            <AboutUser
              name="aboutUser"
              value={this.state.aboutUser}
              handler={this.eventHandler}
            />
            <UserInfo 
              label="Qual sua idade?" 
              type="number" 
              name="age" 
              value={this.state.age} 
              handler={this.eventHandler}
            />
            <UserInfo 
              label="Qual seu nome?"
              type="text" 
              name="nome"
              value={this.state.nome}
              handler={this.eventHandler}
            />
          </fieldset>

          <fieldset>
            <UserInfo 
              label="Você estuda na Trybe?" 
              type="checkbox" 
              name="trybeStudent" 
              checked={this.state.trybeStudent} 
              handler={this.eventHandler}
            />
          </fieldset>

          <fieldset>
            <UserChoise 
              label="Escolha seu assunto com maior dificuldade:" 
              name="selectDifficult" 
              value={this.state.selectDifficult} 
              handler={this.eventHandler} 
            />
            <br />
            <label htmlFor="userFile">
              Sua foto:
              <input type="file" />
            </label>
          </fieldset>

        </form>
      </div>
    )
  }
}

export default Form;
