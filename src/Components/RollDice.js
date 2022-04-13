import { useState } from "react";

import "../Styles/Main.scss";

const RollDice = () => {
  const [randomDie, setRandomDie] = useState(
    "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png"
  );

  const handleRoll = async() => {

    const dicePictures = [
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_1-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_2-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_3-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_4-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_5-512.png",
      "https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_6-512.png",
    ];

    const roll = () => {
      return new Promise((res,rej) => {
        setTimeout(() => {
          res(setRandomDie(dicePictures[Math.floor(Math.random() * 6)]))
          rej(err => {console.error('rolling dice error', err)})
        }, 200)
        })
      }

      for(let i = 0; i < 50; i++) {
        await roll()
      }
  };


  return (
    <div className="dice">
      <img src={randomDie} alt="die 1-6" />
      <button onClick={() => handleRoll()}>Roll!</button>
    </div>
  );
};

export default RollDice;
