import React from 'react';
import RenderInput from './RenderInput';

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      
    }
  }

  handler({ target }) {
    const value = target.type === 'radio' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  blurHandler({ target }) {
    const value = target.type === 'radio' ? target.checked : target.value;
    const regex = (/[^0-9]/g);
    const newValue = value.some(regex) ? value.replace(regex, '') : value;
    console.log(value);
    this.setState({cidade: newValue})
  }

   render() {
    return (
      <fieldset>

        <label htmlFor="nome">
          Nome:
          <RenderInput 
            name="nome" 
            value={(this.state.nome).toUpperCase()} 
            handler={this.handler}
            id="nome" 
            type="text" 
            maxLength="40" 
            required={true} 
          />
        </label>

        <label htmlFor="email">
          Email:
          <RenderInput 
            name="email" 
            value={this.state.email} 
            handler={this.handler} 
            id="email" 
            type="email"
            maxLength="50" 
            required={true} 
          />
        </label>

        <label htmlFor="cpf">
          CPF:
          <RenderInput 
            name="cpf" 
            value={this.state.cpf}
            handler={this.handler}
            id="cpf" type="number"
            maxLength="11" 
            required={true} 
           />
        </label>
        <br />
        <br />
        <label htmlFor="endereco">
          Endereço:
          <RenderInput 
            name="endereco"
            value={(this.state.endereco).replace(/[^a-zA-Z0-9 ,]/g, '')}
            handler={this.handler}
            id="endereco"
            type="text"
            maxLength="200"
            required={true}
          />
        </label>
        <label htmlFor="cidade">
          Cidade:
          <RenderInput
            name="cidade"
            value={this.state.cidade}
            blurHandler={(this.blurHandler)}
            handler={this.handler}
            id="cidade"
            type="text"
            maxLength="28"
            required={true}
          />
        </label>

      </fieldset>
    )
  };
}

export default Form;