function compterMots(phrase) {
	let mots = phrase.split(" ");
	return mots.length;
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4