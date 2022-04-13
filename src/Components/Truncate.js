import { useState } from "react"

const Truncate = () => {

  const [inputText, setInputText] = useState("")
  const [text, setText] = useState("")

  const handleTruncate = () => {
    setText(inputText.slice(0, 15))
  }

  return ( 
  <div>
    <h1>{text}</h1>
    <label htmlFor="">enter your sentence: </label>
    <input type="text" onChange={(event) => setInputText(event.target.value)} />
    <button onClick={() => handleTruncate()}>Truncate</button>
  </div> 
  );
}
export default Truncate;