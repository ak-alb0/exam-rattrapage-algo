function estChaine(valeur) {
	return typeof valeur === "string";
}

console.log(estChaine("bonjour")); // Résultat attendu : true
console.log(estChaine([1, 2, 3])); // Résultat attendu : false
