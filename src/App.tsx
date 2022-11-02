import { useState } from "react";
import { Tweet } from "./components/Tweet";

function App() {
  /* criando um estado (useState)*/
  /* useState vai permitir que o componente monitore a variavel, toda vez que essa variavel é modificada o componente vai renderiza-la*/
  /* o <string[]> é um adicional do Typescript onde é definido qual o tipo de dado essa lista vai armazenar */

  /* 
  Obs: A utilização do useState retorna dos tipos de informações que seriam: 
    A variável que contém os tweet que é um array (onde é acessado o valor atual da variavel tweets) 
    E uma função para atualizar o valor da variavel tweets 
  */

  /* A utilização do useState com o array tweets e setTweets nos facilita para fazer comparação de valores usando o esquema da imutabilidade */
  const [tweets, setTweets] = useState<string[]>([
    /* Declarando quantidade e valores dos tweets iniciais */

    'Tweet 1',
    'Tweet 2',
    'Tweet 3'
  ])

  function createTweet() {
    /* console.log("Estamos aprendendo a criar funções para o botão"); */
    setTweets([...tweets, 'Tweet 4'])
  }
  

  return ( 
    <div>
      {/* Para percorremos um array com N valores no react, utilizamos o "map" para acessar os valores desse array e utiliza-los no componente */}
      { tweets.map(tweet => {return <Tweet text={tweet} />} ) }

      <button onClick= { createTweet }> Adicionar tweet </button>
    </div>
  )
}

export default App
