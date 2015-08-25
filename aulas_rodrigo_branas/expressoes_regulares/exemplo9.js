var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

//Metacaracteres
//.	 - Representa qualquer caractere
//\w - Representa o conjunto [a-zA-Z0-9_]
//\W - Representa o conjunto [^a-zA-Z0-9_]
//\d - Representa o conjunto [0-9]
//\D - Representa o conjunto [^0-9]
//\s - Representa um espaço em branco
//\S - Representa um não espaço em branco
//\n - Representa uma quebra de linha
//\t - Representa um tab

var telefone = "<table><tr>" +
			"<td>(80) 912344567</td>" +
			"<td>(80) 91234-4567</td>" +
			"<td>(80) 1234-4567</td>"+
			"</tr></table>";

console.log('test', regExp.test(telefone));
console.log('exec', regExp.exec(telefone));