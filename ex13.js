function compteARembours(n) {
	let resultat = [];
	for (let i = n; i >= 0; i--) {
		resultat.push(i);
	}
	return resultat;
}

console.log(compteARembours(3)); // Résultat attendu : [3, 2, 1, 0]