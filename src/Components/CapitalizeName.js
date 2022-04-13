import { useEffect, useState } from "react";


const CapitalizeName = () => {

  const [name, setName] = useState('')
  const [capitalize, setCapitalize] = useState('')


  const handleName = () => {
    setCapitalize(name.slice(0, 1).toUpperCase() + name.slice(1))
  }

  return ( 
    <div>
      <h1>{capitalize}</h1>
      <label htmlFor="">Name:</label>
      <input type="text" onChange={(event) => setName(event.target.value)}/>
      <button onClick={() => handleName()}>Capitalize</button>
    </div>
  );
}
export default CapitalizeName;
