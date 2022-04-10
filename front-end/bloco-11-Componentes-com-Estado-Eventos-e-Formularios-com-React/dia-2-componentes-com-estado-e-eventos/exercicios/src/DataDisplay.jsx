import React from 'react';

class DataDisplay extends React.Component {
  render() {
    const { 
      currentState: { nome, email, cpf, endereco, cidade, estado, tipo, resumo, cargo, descricao }
   } = this.props;

   return (
     <div>
       <h2>Dados Enviados</h2>
       <h3>Pessoal</h3>
       <div> Nome: { nome }</div>
       <div> Email: { email }</div>
       <div> CPF: { cpf } </div>
       <div> Endereço: { endereco } </div>
       <div> Cidade: { cidade } </div>
       <div> Estado: { estado }</div>
       <div> Tipo de residência: { tipo }</div>
       <div> Profissional</div>
       <div> Curriculo: { resumo }</div>
       <div> Cargo: { cargo }</div>
       <div> Descrição do cargo: { descricao }</div>
     </div>
   )

  }
}

export default DataDisplay;