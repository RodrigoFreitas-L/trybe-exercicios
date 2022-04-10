import React from 'react';
import RenderInput from './RenderInput';
import DataDisplay from './DataDisplay';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

const INITIAL_STATE = {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    tipo: '',
    resumo: '',
    cargo: '',
    descricao: '',
    contadorOnMouseEnter: 0,
    submitted: false,
}

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this);
    this.blurHandler = this.blurHandler.bind(this);
    this.onMouseEnterEvent = this.onMouseEnterEvent.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.sendForm = this.sendForm.bind(this);
    
    this.state = INITIAL_STATE;
  }

  handler({ target }) {
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  blurHandler({ target }) {
    let value = target.value;
    const regex = /^\d/;
    if (value.match(regex)) {
      value = '';
      this.setState({cidade: value})
    }
  }

  onMouseEnterEvent() {
    if (this.state.contadorOnMouseEnter === 0) {
      alert('Preencha com cuidado esta informação.');
      this.setState((prevValue) => ({
        contadorOnMouseEnter: prevValue.contadorOnMouseEnter + 1,
      }))
    }
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }

  sendForm() {
    this.setState({submitted: true});
  }

   render() {
     const { submitted } = this.state;
    return (
      <form action="">
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
              id="cpf" 
              type="number"
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
              handler={this.handler}
              blurHandler={(this.blurHandler)}
              id="cidade"
              type="text"
              maxLength="28"
              required={true}
            />
          </label>
          <label htmlFor="estado">
            Estado:
            <select 
            name="estado" 
            id="estado"
            onChange={this.handler}
            required={true}
            defaultValue=""
            >
              <option value="">Selecione</option>
              {
                states.map((value, key) => (
                  <option key={ key }>{ value }</option>
                ))
              }
            </select>
          </label>
          <label htmlFor="tipo">
              Tipo:
              <RenderInput 
                name="tipo"
                value="apartamento"
                handler={this.handler}
                id="tipo"
                type="radio"
                required={true}
              />
              Apartamento
              <RenderInput
                name="tipo"
                value="casa"
                handler={this.handler}
                id="tipo"
                type="radio"
                required={true}
              />
              Casa
          </label>
        </fieldset>

        <fieldset>
          Sobre seu último emprego:
          <div>
            Resumo do seu último emprego:
            <br />
            <textarea
              cols="30"
              rows="10"
              name="resumo"
              value={this.state.resumo}
              onChange={this.handler}
              maxLength="1000"
              id="resumo"
              type="textarea"
              required
            />
          </div>
          <div>
            Cargo:
            <br />
            <textarea 
              cols="30" 
              rows="10"
              name="cargo"
              id="cargo" 
              value={this.state.cargo}
              onChange={this.handler}
              maxLength="40"
              onMouseEnter={this.onMouseEnterEvent}
              required
            />
          </div>
          <div>
            Descrição do cargo:
            <br />
            <textarea
              cols="30"
              rows="10"
              name="descricao"
              id="descricao"
              value={this.state.descricao}
              onChange={this.handler}
              maxLength="500"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <button
            type="button"
            onClick={this.sendForm}
            value="enviar"
          >
            Enviar
          </button>
          <button 
            type="reset"
            onClick={this.resetForm}
            value="reset"
          >
            Reset
          </button>
          { submitted && < DataDisplay currentState={ this.state } /> }
        </fieldset>
      </form>
    )
  };
}

export default Form;