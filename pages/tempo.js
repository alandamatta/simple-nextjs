import React from 'react';

function Tempo(props) {
	const date = new Date();
	const dateString = date.toGMTString();

	return (
		<div>
			<p>{dateString} - (Dinâmico)</p>
			<p>{props.staticDateString} - (Estático)</p>
		</div>
	)
}

export function getStaticProps() {
	const staticDate = new Date();
	const staticDateString = staticDate.toGMTString();
	return {
		props: {
			staticDateString
		},
		revalidate: 1
	}
}

export default Tempo;
