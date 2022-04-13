import { useState } from "react";

const DecimalToBinary = () => {
  const [numInput, setNumInput] = useState("");
  const [binNum, setBinNum] = useState();

  const handleConverter = () => {
    const converted = parseInt(numInput).toString(2);
    setBinNum(converted);
  };

  return (
    <div>
      <h1>{binNum}</h1>
      <label htmlFor="">Enter a base 10 number: </label>
      <input type="number" onChange={(e) => setNumInput(e.target.value)} />
      <button onClick={() => handleConverter()}>Convert</button>
    </div>
  );
};

export default DecimalToBinary;
