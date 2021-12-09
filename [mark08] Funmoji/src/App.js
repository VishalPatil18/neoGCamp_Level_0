import "./styles.css";
import { useState } from "react";

export default function App() {
  let [userInput, setUserInput] = useState("The translation will appear here");
  let emojiValue;

  function inputHandler(event) {
    if (emojis[event.target.value]) {
      emojiValue = emojis[event.target.value];
      setUserInput(emojiValue);
    } else {
      setUserInput("Emoji 404 : Emoji not found");
    }
  }

  const emojis = {
    "😀": '"Grinning Face"',
    "😇": '"Smiling With Halo"',
    "🤡": '"Clown Face"',
    "🤖": '"Robot Face"',
    "🐶": '"Dog Face"',
    "🙊": '"Speak-no-evil Monkey"',
    "🎾": '"Tennis Ball"',
    "🎲": '"Game Dice"',
    "🎯": '"Bullseye"',
    "🚜": '"Tractor"'
  };

  function printEmojiMeaning(event) {
    if (emojis[event.target.innerText]) {
      emojiValue = emojis[event.target.innerText];
      setUserInput(emojiValue);
    } else {
      setUserInput("Emoji not found");
    }
  }

  return (
    <div className="App">
      <h1>Funmoji</h1>
      <input onChange={inputHandler} placeholder="Search your Emoji here" />
      <p>{userInput}</p>
      <ul>
        {Object.keys(emojis).map((item, index) => {
          return (
            <li key={index} onClick={printEmojiMeaning}>
              {item}
            </li>
          );
        })}
      </ul>
      <footer>
        Made with{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        by{" "}
        <a href="https://vishalpatil-neogcamp-acitivity.netlify.app/index.html">
          Vishal Patil
        </a>
      </footer>
    </div>
  );
}
