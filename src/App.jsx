//import './App.css'

import { useState } from "react"

function App() {
  const [idade, setIdade] = useState(10)
  /* let idade = 18
  idade = 20 */

  const [nome, setNome] = useState('')

  return (
    <>
      <h1>Somando e subtraindo</h1>

      <label htmlFor="">Nome: </label><br />
      <input
        type="text"
        placeholder="Insira o nome"
        value={nome}
        onChange={event => {
          //console.log(event.target.value)
          setNome(event.target.value)
        }}
      />
      {/* <button
        onClick={() => {
          console.log(idade + 10)
          return idade + 10
        }}>+ 10</button> */}
      <button onClick={() => setIdade(idade + 10)}>+ 10</button>
      <button onClick={() => setIdade(idade - 10)}>- 10</button>
      <p>{nome} tem {idade} anos de idade</p>
    </>
  )
}

export default App
