import { useState } from "react"

const SwapiFetch = () => {

  const [character, setCharacter] = useState()

  const getCharacter = () => {
    const randomNum = Math.floor(Math.random() * 83)
    console.log(randomNum)
    fetch(`https://www.swapi.tech/api/people/${randomNum}`)
    .then(res => res.json())
    .then(data => setCharacter(data.result.properties.name))
  }

  return <div>
    <h1>{character}</h1>
    <button onClick={() => getCharacter()}>Get Character</button>
    </div>
};

export default SwapiFetch;
