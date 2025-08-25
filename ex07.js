function intersection(tab1, tab2) {
	return tab1.filter((val, index) => tab2.includes(val) && tab1.indexOf(val) === index);
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // Résultat attendu : [2, 3]
console.log(intersection([2, 2], [2, 2])); // Résultat attendu : [2]