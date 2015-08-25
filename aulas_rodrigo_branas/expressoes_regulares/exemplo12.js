var regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g;

//Modificadores
//i - Case-insensitive matching
//g - global matching
//m - Multiline matching

var telefone = "<table><tr>" +
			"<td>(80) 912344567</td>" +
			"<td>(80) 91234-4567</td>" +
			"<td>(80) 1234-4567</td>"+
			"</tr></table>";

console.log(telefone.replace(regExp,'telefone'));
console.log('test', regExp.test(telefone));
//console.log('exec', regExp.exec(telefone));