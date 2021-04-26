import React, { Component } from 'react';
import './estilo.css';

class FormularioCadastro extends Component {

	constructor() {
		super();
		this.titulo ='';
		this.texto = '';
	}

	_handleMudancaTitulo(evento) {
		evento.stopPropagation();
		this.titulo = evento.target.value;
	}

	_handleMudancaTexto(evento) {
		evento.stopPropagation();
		this.texto = evento.target.value;
	}

	_criarNota(evento) {
		evento.preventDefault();
		evento.stopPropagation();
		console.log(evento);
	}

	render() {
		return (
			<form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
				<input
					type="text"
					placeholder="Título"
					className="form-cadastro_input"
					onChange={this._handleMudancaTitulo.bind(this)}
				/>
				<textarea 
					rows={15} 
					className="form-cadastro_input" 
					placeholder="Escreva sua nota..."
					onChange={this._handleMudancaTexto.bind(this)} />
				<button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
			</form>
		);
	}
}

export default FormularioCadastro;
