function triCroissant(tab) {
	return [tab].sort((a, b) => a - b);
}

console.log(triCroissant([1, 0, 5, -1, 76])); // Résultat attendu : [-1, 0, 1, 5, 76]
console.log(triCroissant([99, -3, 445, 0])); // Résultat attendu : [-3, 0, 99, 445]