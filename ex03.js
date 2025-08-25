function sommeTotale(tab) {
	let total = 0;
	for (let i = 0; i < tab.length; i++) {
		total = total + tab[i];
	}
	return total;
}

console.log(sommeTotale([1, 2, 3, 4])); // Résultat attendu : 10