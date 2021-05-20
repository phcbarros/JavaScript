const {existsSync, appendFile, writeFile} = require('fs')
const {promisify} = require('util')
const writeFileAsync = promisify(writeFile)
const appendFileAsync = promisify(appendFile)

const readline = require('readline')
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// precisa manter o this do terminal, mantém as variávies criada em terminal e não as do escopo de promises.js
// question não segue o padrão de callbacks (error, result)
// portanto, não é possível converter usando promisify
//const questionAsync = promisify(terminal.question.bind(terminal))

// simulando oq o promisify deve fazer, mas ignorando o primeiro
// parametro, agora, o primeiro parametro será considerado com sucesso!
const functionToPromise = (fn, ...args) => {
  return new Promise((resolve) => fn(...args, resolve))
}

const questionFunc = terminal.question.bind(terminal)
const questionAsync = (msg) => functionToPromise(questionFunc, `${msg}\n`)

;(async function main() {
  try {
    const nomeDoArquivo = await questionAsync(
      'Qual é o arquivo que deseja trabalhar?',
    )
    const texto = await questionAsync('Escreva algo para incluir')
    const existeArquivo = existsSync(nomeDoArquivo)

    if (existeArquivo) {
      await appendFileAsync(nomeDoArquivo, `\n${texto}`)
      console.log(`${texto} adicionado ao arquivo ${nomeDoArquivo}`)
      return
    }

    await writeFileAsync(nomeDoArquivo, `${texto}`)
  } catch (error) {
    console.log('Erro: ', error)
  } finally {
    console.log('Processo finalizado com sucesso!')
    terminal.close()
  }
})()
