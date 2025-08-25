function motLePlusCourt(phrase) {
	const mots = phrase.split(" ");
	return mots.reduce((court, mot) => (mot.length < court.length ? mot : court));
}

console.log(motLePlusCourt("Bonjour à tous et bienvenue")); // Résultat attendu : "à"