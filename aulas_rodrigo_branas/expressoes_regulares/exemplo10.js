var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/;

//String API
//match   - Executa uma busca na String e retorna um array contendo
//os dados encontrados ou null
//split   - Divide a String com base em outra String fixa ou expressão regular
//replace - Substitui partes da string com base em uma outra String fixa ou expressão regular

var telefone = "<table><tr>" +
			"<td>(80) 912344567</td>" +
			"<td>(80) 91234-4567</td>" +
			"<td>(80) 1234-4567</td>"+
			"</tr></table>";

console.log(telefone.match(regExp));
console.log('test', regExp.test(telefone));
console.log('exec', regExp.exec(telefone));