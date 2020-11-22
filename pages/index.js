import React, {useState} from 'react';
const Home = () => {
	return (
		<div>
			This is my Home
			<Contador />
		</div>
	)
}

const Contador = () => {

	const [contador, setContador] = useState(0);

	const adicionarContador = () => {
		setContador(contador+1);
	}

	const subtrairContador = () => {
		setContador(contador-1);
	}

	return (
		<div>
			<button onClick={subtrairContador}>Subtrair</button>
			<input type="text" disabled={true} value={contador}/>
			<button onClick={adicionarContador}>Adicionar</button>
		</div>
	)
}

export default Home;
