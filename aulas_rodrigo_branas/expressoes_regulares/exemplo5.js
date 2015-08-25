var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;

//Quantificadores - Parte 1
//Os quantificadores podem se aplicados a caracteres, grupos, 
//conjuntos ou metacaracteres
//{n}	- Quantifica um número específico
//{n,}	- Quantifica um número minímo
//{n,m}	- Quantifica um número minímo e máximo

console.log('test', regExp.test('(48) 4799-8049'));
console.log('exec', regExp.exec('(48) 4799-8049'));