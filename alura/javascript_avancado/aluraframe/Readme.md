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

## Criando ObjectStore

Para salvarmos nossos dados é preciso criar um **objectsStore** para armazenar nosso objetos javascript. Criamos nossa objetStore dentro do método onupgradeneeded.

```javascript
request.onupgradeneeded = e => {
    const myConnection = e.target.result;
    myConnection.createObjectStore('minhaStore');
};
```

## Adicionando dados na ObjectStore

Para adicionarmos um objeto na objectStore temos que criar antes uma operação de transação por meio do método **_transaction([stores], mode)_** que recebe dois parâmetros. O primeiro é uma lista de stores e o segundo é o modo como você quer acessar essas stores (readwrite, readonly, etc.). 

```javascript
const transaction = connection.transaction(['minhaStore'], 'readwrite');
```

Em seguida recuperamos a store que queremos usar retornado pela transação e adicionamos o objeto que vamos salvar executando o metodo **__add()__** da store.

```javascript
//recupera a store
const store = transaction.objectStore('person');
//solicita a adição da pessoa na store
const savePerson = store.add(person);
```
Porém o método **add** faz somente uma requisição para o armazenamento do dado não garantindo a sua persistência. Para isso temos que usar os métodos **_onsuccess()_** e **_onerror()_**.

```javascript
//método de sucesso
savePerson.onsuccess = e => (console.log('Pessoa incluída com sucesso!'));
//método de error
savePerson.onerror = e => (console.log('Não foi possível incluir a pessoa'));
```

Por fim temos o seguinte código para o método de inserção de pessoas.

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        Object.freeze(this);
    }
}

function addPerson() {
    const person = new Person('Paulo', 29);
    //cria a transação
    const transaction = connection.transaction(['person'], 'readwrite');
    //recupera a store
    const store = transaction.objectStore('person');
    //solicita a adição da pessoa na store
    const savePerson = store.add(person);
    
    //método de sucesso
    savePerson.onsuccess = e => (console.log('Pessoa incluída com sucesso!'));
    //método de error
    savePerson.onerror = e => (console.log('Não foi possível incluir a pessoa'));
}
```

Ainda está faltando alterar o método onupgradeneeded para refletir a alterações. Primeiro estamos apagando a store de pessoas caso ela já exista e logo em seguida a recriamos e definimos que ela terá um id autonumerado para evitarmos a mensagem de erro de não existir uma chave única.

```javascript 
 openRequest.onupgradeneeded = e => {
    console.log('Cria ou altera um banco já existente');
    const myConnection = e.target.result;

    if(myConnection.objectStoreNames.contains('person')) {
        myConnection.deleteObjectStore('person');
    }

    myConnection.createObjectStore('person', { autoIncrement: true});
};
```

Obs.: Sempre que alteramos o método onupgradeneeded é necessário apagar o banco ou alterar a sua versão.

```javascript
var openRequest = window.indexedDB.open('meuBanco', 2);
```