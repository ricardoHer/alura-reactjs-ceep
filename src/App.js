import React, { Component } from 'react';
import ListaDeNotas from  './components/ListaDeNotas/index';
import FormularioCadastro from './components/FormularioCadastro/index';
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    };
    this.notas = [];
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = { notas: novoArrayDeNotas };
    this.setState(novoEstado);
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
