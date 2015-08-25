var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;

//Grupos de Caracteres
//[abc] - Aceita qualquer caractere dentro do grupo, nesse caso a, b ou c
//[^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso a, b ou c
//[0-9] - Aceita qualquer caractere entre 0 e 9
//[^0-9] - Não aceita qualquer caractere entre 0 e 9
console.log('test', regExp.test('(48) 9999-9999'));
console.log('exec',regExp.exec('(48) 9999-9999'));

console.log('test', regExp.test('(48) 4799-8049'));
console.log('exec', regExp.exec('(48) 4799-8049'));