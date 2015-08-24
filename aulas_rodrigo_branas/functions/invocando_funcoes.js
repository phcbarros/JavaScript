//1º - Invocando uma função diretamente no escopo global
console.info('1º - Invocando uma função diretamente no escopo global');
var soma =  function(a, b){
	return a = b;
};

//invocação
console.log("soma()", soma(2,2)); //4

//passando uma função como parâmetro (lambda) usando o conceito de reuso
var produto = {
	nome: 'Sapato',
	preco: 150
};

var formulaImpostoA =  function(preco){
	return preco * 0.1; //10%
};

var formulaImpostoB =  function(preco){
	return preco * 0.2; //20%
};

var calcularPreco = function(produto, formulaImposto){
	return produto.preco + formulaImposto(produto.preco);	
};

//invocação
console.log(calcularPreco(produto, formulaImpostoA)); //165
console.log(calcularPreco(produto, formulaImpostoB)); //180

//Retornando uma função
var helloWorld = function(){
	return function(){
		return 'Hello World!';	
	};
};

console.log(helloWorld);		//function
console.log(helloWorld());		//function (retorna o a função dentro de helloWorld)
console.log(helloWorld()());	//Hello World!
console.log();

//2º - Invocando uma função por meio de um Objeto
console.info('2º - Invocando uma função por meio de um Objeto');
var pessoa = {
	nome: 'João',
	idade: 20,
	getIdade: function(){
		return this.idade;
	}
};

console.log(pessoa.getIdade);	//function
console.log(pessoa.getIdade());	//20

var getIdade = function(){
	return this.idade;
};

var pessoa2 = {
	nome: 'João',
	idade: 20,
	getIdade: getIdade //referência a função getIdade
};

console.log("getIdade", getIdade());				//undefined pois this refere-se ao escopo global
console.log("pessoa2.getIdade",pessoa2.getIdade());	//20 pois refere-se ao objeto pessoa2
console.log();

//3º - Invocando uma função com call e apply
console.info('3º - Invocando uma função com call e apply');

//Toda função possui os métodos call() e apply();
//Eles são utilizados para indicar em qual escopo uma função deve ser executada.
//A diferença é basicamente a forma como é utilizado:
//função.call(escopo, parametro1, parametro2);
//função.apply(escopo, parametros);
var getIdade2 = function(extra1){
	console.log(arguments);
	return this.idade + extra1;
}

console.log("pessoa2.getIdade",pessoa2.getIdade()); 					//20
console.log("getIdade()",getIdade());						//undefined
console.log("call()",getIdade2.call(pessoa, 2, 3, 5));		//22
console.log("apply()", getIdade2.apply(pessoa,[2,3, 5]));	//22
console.log();

//4º - Invocando uma função por meio do operador new
console.info('4º - Invocando uma função por meio do operador new');

//Funções Construtoras X Funções Fábrica

//Funções Fábrica (Factory)
var criarUsuario = function(nome, idade){
	return {
		nome: nome,
		idade: idade
	};
};

console.log(criarUsuario('Pedro', 20));
console.log(criarUsuario('Maria', 30));

//Funções Construtoras
var Usuario = function(nome, idade){
	this.nome = nome;
	this.idade = idade;
};
console.log(new Usuario('Pedro', 20));
console.log(new Usuario('Maria', 30));

var pedro = {};
Usuario.call(pedro, 'Pedro', 20);

var maria = {};
Usuario.apply(maria, ['Maria', 30]);

console.log(pedro);
console.log(maria);

