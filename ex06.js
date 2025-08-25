function plusPetit(tab) {
	return Math.min(...tab);
}

console.log(plusPetit([4, 15, 2, 9])); // Résultat attendu : 2