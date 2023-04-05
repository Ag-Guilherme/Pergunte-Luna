const openai = new OpenAI('YOUR_API_KEY');

function generateAnswer(event) {
	event.preventDefault();
	const question = event.target.elements.question.value;
	const prompt = `Question: ${question}\nAnswer:`;
	const parameters = {
		prompt: prompt,
		temperature: 0.7,
		max_tokens: 60,
		n: 1,
		stop: '\n',
	};
	openai.complete('text-davinci-002', parameters)
		.then((response) => {
			const answer = response.choices[0].text.trim();
			document.getElementById('answer').innerHTML = answer;
		})
		.catch((error) => {
			console.log(error);
		});
}
const openai = new OpenAI('YOUR_API_KEY');

function generateAnswer(event) {
	event.preventDefault();
	const question = event.target.elements.question.value;
	const prompt = `Question: ${question}\nAnswer:`;
	const parameters = {
		prompt: prompt,
		temperature: 0.7,
		max_tokens: 60,
		n: 1,
		stop: '\n',
	};
	openai.complete('text-davinci-002', parameters)
		.then((response) => {
			const answer = response.choices[0].text.trim();
			document.getElementById('answer').innerHTML = answer;
		})
		.catch((error) => {
			console.log(error);
		});
}
const openai = new OpenAI('YOUR_API_KEY');

function generateAnswer(event) {
	event.preventDefault();
	const question = event.target.elements.question.value;
	const prompt = `Question: ${question}\nAnswer:`;
	const parameters = {
		prompt: prompt,
		temperature: 0.7,
		max_tokens: 60,
		n: 1,
		stop: '\n',
	};
	openai.complete('text-davinci-002', parameters)
		.then((response) => {
			const answer = response.choices[0].text.trim();
			document.getElementById('answer').innerHTML = answer;
		})
		.catch((error) => {
			console.log(error);
		});
}
