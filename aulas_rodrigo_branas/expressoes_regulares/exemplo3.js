var regExp = /^\(48\) 9999-9999$/;

//Iniciando e finalizando com um determinado caractere
//^ - Inicia com um determinado caractere
//$ - Finaliza com um determinado caractere
console.log('test', regExp.test('(48) 9999-9999'));
console.log('exec',regExp.exec('(48) 9999-9999'));