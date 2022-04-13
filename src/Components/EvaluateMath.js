import { useState } from "react"

const EvaluateMath = () => {

  const [evalInput, setEvalInput] = useState('')
  const [answer, setAnswer] = useState('')

  const handleExpression = () => {
    const solve = eval(evalInput)
    setAnswer(solve)
  }

  return ( 
    <div>
      <h1>{answer}</h1>
      <label htmlFor="">Evaluated expression: </label>
      <input type="text" onChange={(event) => setEvalInput(event.target.value)}/>
      <button onClick={() => handleExpression()}>Evaluate!</button>
    </div>
  );
}
export default EvaluateMath;