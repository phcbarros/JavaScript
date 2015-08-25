var regExp = /\(48\) 9999-9999/;

//Escapando caracteres especiais
//\ - A barra é utilizada antes de caracteres especiais, com o objetivo de escapá-los
//test - Testa a RegExp, retornando true ou false
console.log('test', regExp.test('(48) 9999-9999'));

//exec - Executa a RegExp, retornando os detalhes
console.log('exec',regExp.exec('(48) 9999-9999'));