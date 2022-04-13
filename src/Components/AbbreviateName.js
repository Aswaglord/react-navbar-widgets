import { useState } from "react";

const AbbreviateName = () => {

  const [input, setInput] = useState("")
  const [name, setName] = useState("")

  const handleAbbreviation = () => {
    const nameArr = input.split(' ')
    const abbrName = nameArr[0] + " " + nameArr[1].slice(0,1)
    setName(abbrName)
  }

  return ( 
    <div>
      <h1>{name}</h1>
      <label htmlFor="">first and last name: </label>
      <input type="text" onChange={(event) => setInput(event.target.value)}/>
      <button onClick={() => handleAbbreviation()}>Abbreviate</button>
    </div>
  );
}
export default AbbreviateName;