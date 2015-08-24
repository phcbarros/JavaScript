var carros = ['Ka', 'Corsa', 'Pálio'];
var motos = ['Honda', 'Yamaha'];

//valueOf - Retorna o próprio array
console.log("valueOf:", carros.valueOf());

//toString - Converte o array em uma string
console.log("toString:", carros.toString());

//push - Adiciona um elemento na ultima posição do array, retornando o novo length
console.log('push:', carros.push('Gol'));

//pop - Remove o ultimo elemento do array retornando-o
console.log('pop:', carros.pop());

//unshift - Adiciona um elemento na primeira posição do array, retornando o novo length
console.log('unshift:', carros.unshift('Gol'));

//shift - Remove o primeiro elemento do array retornando-o
console.log('shift:', carros.shift());

//indexOf - Retorna o índice do primeiro elemento encontrado
console.log('indexOf:', carros.indexOf('Corsa'));
console.log();

//splice - Adiciona ou remove elementos de uma posição específica
console.log('splice: Removendo Corsa -', carros.splice(1, 1), carros);
console.log('splice: Substituindo Palio -', carros.splice(1, 1, 'Gol'), carros);
console.log('splice: Adicionando Ferrari -', carros.splice(1, 0, 'Ferrari'), carros);
console.log('splice: Adicionando BMW e Sonic -', carros.splice(2, 0, 'BMW', 'Sonic'), carros);
console.log();

carros = ['Ka', 'Corsa', 'Pálio'];

//forEach - Percorre o array, invocando uma função para cada elemento
console.log("forEach");
carros.forEach(function(elemento){
	console.log(elemento)
});
console.log();

var cars = [
	{modelo: 'Ka', marca: 'Ford', preco: 18800},
	{modelo: 'Corsa', marca: 'Chevrolet', preco: 34000},
	{modelo: 'Palio', marca: 'Fiat', preco: 25000}
];

//filter - Filtra o array com base em uma função de filtro
console.log('filter:', cars.filter(function(elemento){
	return elemento.marca === 'Ford';
}));

//every - Retorna true se todos os elementos do array atenderem a função
console.log('every:', cars.every(function(elemento){
	return elemento.marca === 'Ford';
}));

//some - Retorna true se um dos elementos do array atender a função
console.log('some:', cars.some(function(elemento){
	return elemento.marca === 'Ford';
}));

//map - Tranforma os elementos de um array (mapeando um novo array)
console.log('map',  cars.map(function(elemento){
	return elemento.marca;
}));

//reduce - Acumula os elementos de um array
console.log('reduce', cars.reduce(function(prev, cur){
	return prev + cur.preco;
},0));

//concat - Junta dois array, retornando a cópia do dois (gera um novo array)
console.log("concat:", carros.concat(motos));

//slice - Seleciona uma parte do array, retornando-a
console.log('slice:',carros.slice(0,2)); //posição inicial inclusive e posição final (indice - 1) ['Ka', 'Corsa']
console.log('slice:',carros.slice(1,3)); //['Corsa', 'Palio'];
console.log('slice:',carros.slice(2));	//['Palio']

//reverse - Inverte a ordem dos elementos do array
console.log('reverse:', carros.reverse());
console	.log();

//sort - Ordena os elementos do array com base em uma função
console.log('sort: Preço Ascendente', cars.sort(function(a, b){
	return a.preco - b.preco;
}));
console	.log();

console.log('sort: Nome Descendente', cars.sort(function(a, b){
	return b.modelo.localeCompare(a.modelo);
}));

console	.log();
//join - Cria uma String customizada com todos os elementos do array;
console	.log('join:', carros.join('|'));