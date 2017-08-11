# Exemplos retirado do curso da Alura - Javascript Avançado III 

[Alura](https://www.alura.com.br)

## IndexedDb

O banco de dados do browser, podemos acessá-lo por meio do **_window.indexedDB_** e terá como saída **IDBFactory {}**.

## Métodos

Para criar uma conexão com o banco usamos o método **_indexedDB.open()_** que executa uma solitação de abertura de conexão. Esse método recebe dois parâmetros, o primeiro é o nome do banco e o segundo a versão que precisa ser alterada toda vez que seja necessário executar o métodos onupgradeneeded. Usamos os métodos **_onupgradeneeded_**, **_onsuccess_** e **_onerror_**. O primeiro é usado para criar ou altera um banco já existente, o segundo é quando a conexão é obtida e o último quando ocorre algum erro.

```javascript
const request = indexedDB.open('meuBanco', 1);

request.onupgradeneeded = e => (console.log('Cria ou altera um banco já existente'));
request.onsuccess = e => (console.log('Conexão obtida com sucesso'));
request.onerror = e => (console.log(e.target.error));
```

## Criando objectStore

Para salvarmos nossos dados é preciso criar um **objectsStore** para armazenar nosso objetos javascript.

```javascript
request.onupgradeneeded = e => {
    const myConnection = e.target.result;
    myConnection.createObjectStore('minhaStore');
};
```