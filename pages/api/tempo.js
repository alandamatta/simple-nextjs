async function tempo(request, response) {
	const date = new Date().toGMTString();

	const randomUserResponse = await fetch(process.env.RANDOM_USER_URL);

	const randomUserJson = await randomUserResponse.json();

	const userName = randomUserJson.results[0].login.username;


	response.json({
		date,
		userName
	});
}

export default tempo;
