var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

//Quantificadores - Parte 2
//Os quantificadores podem se aplicados a caracteres, grupos, 
//conjuntos ou metacaracteres
//?	- Zero ou um
//*	- Zero ou mais
//+	- Um ou mais

console.log('test', regExp.test('(11) 47998049'));
console.log('exec', regExp.exec('(11) 47998049'));

console.log('test', regExp.test('(11) 94799-8049'));
console.log('exec', regExp.exec('(11) 94799-8049'));