import React, {useState} from 'react';
import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<Link href="/sobre">
				<a>Acessar página sobre</a>
			</Link>
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
