//1º - Usando o escopo global
console.info("1º - Usando o escopo global");
var counter = 0;
var add = function(){
	return ++counter;
};

console.log(add());	//1
console.log(add());	//2
console.log(add()); //3

var itens = [];
var add = function(item){
	itens.push(item);
	return itens;
};

console.log(add('A'));	//A
console.log(add('B'));	//B
console.log(add('C')); 	//C

console.log(add()); //undefined a função add foi sobreescrita poluindo o escopo global

//Por que nós declaramos tanta coisa no escopo global?
//Como a linguagem não possui um ligador ou linker, faz uso de um escopo global
//compartilhado para estabelecer os vínculos entre diferentes partes da aplicação
console.log();

//2º - Usando Object para encapsular o escopo
console.info("2º - Usando Object para encapsular o escopo");
var objCounter = {
	value: 0,
	add: function(){
		return ++this.value;
	}
};

console.log(objCounter.add()); //1
console.log(objCounter.add()); //2
console.log(objCounter.add()); //3

var objItens = {
	value: [],
	add : function(item){
		this.value.push(item);
		return this.value;
	}	
};

console.log(objItens.add('A'));//A
console.log(objItens.add('B'));//B
console.log(objItens.add('C'));//C

console.log(objCounter.add()); //4

//Problema: A linguagem não possui modificadores de visibilidade como private ou public
objCounter.value = undefined;
console.log(objCounter.add()); //NaN

console.log();

//3º - Usando Function para encapsular o escopo
console.info("3º - Usando Function para encapsular o escopo");

//factory function
var createCounter = function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		}
	};
};

console.log("Factory Function");
var factoryCounter = createCounter();
console.log(factoryCounter.value);
console.log(factoryCounter.add()); //1
console.log(factoryCounter.add()); //2
console.log(factoryCounter.add()); //3

//Constructor function
var Counter = function(){
	var value = 0;
	this.add = function(){
		return ++value;
	};
};

console.log("Constructor Function");
var c = new Counter();
console.log(c.value);
console.log(c.add()); //1
console.log(c.add()); //2
console.log(c.add()); //3

//IIFE - Immediately-Invoked Function Expression
//evita ter que chamar a função para ser inicializada
console.log("IIFE - Immediately-Invoked Function Expression");
//Module Pattern
var counterModule = ( function(){
	var value = 0;
	return {
		add: function(){
			return ++value;
		},
		reset: function(){
			value = 0;
		}
	};
})();

console.log("Module Pattern");
console.log(counterModule.value); 
console.log(counterModule.add()); //1
console.log(counterModule.add()); //2
console.log(counterModule.add()); //3
counterModule.reset();
console.log(counterModule.add()); //1

//Revealing Module Pattern
var counterRevealingModule = ( function(){
	var _value = 0;
	
	var _add= function(){
		return ++_value;
	};
		
	var _reset = function(){
		_value = 0;
	};
	
	return {
		add: _add,
		reset: _reset
	};
})();

console.log("Revealing Module Pattern");
console.log(counterRevealingModule.value); 
console.log(counterRevealingModule.add()); //1
console.log(counterRevealingModule.add()); //2
console.log(counterRevealingModule.add()); //3
counterRevealingModule.reset();
console.log(counterRevealingModule.add()); //1