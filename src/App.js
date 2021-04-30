import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/index';
import FormularioCadastro from './components/FormularioCadastro/index';
import ListaDeCategorias from './components/ListaDeCategorias/index'

import "./assets/App.css";
import "./assets/index.css";

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: []
    };
    this.notas = [];
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayDeNotas = [...this.state.notas, novaNota];
    const novoEstado = { notas: novoArrayDeNotas };
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategoria };
    this.setState(novoEstado);
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({
      notas: arrayNotas
    });
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)} />
        </main>
      </section>
    );
  }
}

export default App;
