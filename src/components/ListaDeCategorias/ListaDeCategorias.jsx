import React, { Component } from 'react';
import './estilo.css';

class ListaDeCategorias extends Component {
	state = {};

	constructor() {
		super();
	}

	_handlerEventoInput(e) {
		if (e.key === 'Enter') {
			let valorCategoria = e.target.value;
			this.props.adicionarCategoria(valorCategoria);
			e.target.value = '';
		}
	}

	render() {
		return (
			<section className="lista-categorias">
				<ul className="lista-categorias_lista">
					{this.props.categorias.map((categoria, index) => {
						return (
							<li key={index} className="lista-categorias_item">
								{categoria}
							</li>
						);
					})}
				</ul>
				<input
					className="lista-categorias_input"
					type="text"
					placeholder="Adicionar categoria..."
					onKeyUp={this._handlerEventoInput.bind(this)}
				/>
			</section>
		);
	}
}

export default ListaDeCategorias;
