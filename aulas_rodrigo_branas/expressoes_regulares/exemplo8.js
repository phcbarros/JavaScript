var regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/;

//Quantificadores - Parte 2
//Os quantificadores podem se aplicados a caracteres, grupos, 
//conjuntos ou metacaracteres
//?	- Zero ou um
//*	- Zero ou mais
//+	- Um ou mais

var telefone = "<table><tr>" +
			"<td>(80) 912344567</td>" +
			"<td>(80) 91234-4567</td>" +
			"<td>(80) 1234-4567</td>"+
			"</tr></table>";

console.log('test', regExp.test(telefone));
console.log('exec', regExp.exec(telefone));