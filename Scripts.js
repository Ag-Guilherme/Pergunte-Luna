const openai = require('openai');
const apiKey = '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';

const openaiClient = new openai(apiKey);

function generateAnswer(event) {
    event.preventDefault();
    const question = event.target.elements.question.value;
    const prompt = `Question: ${question}\nAnswer:`;
    const parameters = {
        prompt: prompt,
        temperature: 0.7,
        maxTokens: 60,
        n: 1,
        stop: '\n',
    };

    openaiClient.complete('text-davinci-002', parameters)
        .then((response) => {
            const answer = response.choices[0].text.trim();
            document.getElementById('answer').innerHTML = answer;
        })
        .catch((error) => {
            console.log(error);
        });
}

