
//function declaration
//A function declaration é carregada antes do código ser interpretado
function soma(a, b){
	return a + b;
}

console.log(soma);
console.log(soma(2,2));

//function expression (named)
//A function expression é carregada durante a interpretação do código
var soma = function soma(a, b){
	return a = b;
}

console.log(soma);
console.log(soma(1,2))