$( document ).ready(async function() {
	await typeSentence("Hey there! I'm Hazsi, a 16 year old developer from Canada.", "#typetext");
});

async function typeSentence(sentence, eleRef, delay = 50) {
	const letters = sentence.split("");
	let i = 0;
  
	while(i < letters.length) {
		await waitForMs(delay);
		$(eleRef).append(letters[i]);
		i++
	}
  
	return;
}


function waitForMs(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}