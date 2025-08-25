function compterPairs(tab) {
	return tab.filter((x) => x % 2 === 0).length;
}

console.log(compterPairs([1, 2, 3, 4, 5])); // Résultat attendu : 2