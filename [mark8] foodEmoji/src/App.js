import React, { useState } from "react";
import "./styles.css";

const emojiDict = {
  "🧆": "falafel",
  "🥐": "croissant",
  "🍱": "bento box",
  "🍝": "spaghetti",
  "🥮": "moon cake",
  "🥠": "fortune cookie",
  "🍰": "shortcake",
  "🍮": "custard",
  "🍘": "rice cracker",
  "🍠": "roasted sweet potato",
  "🍣": "sushi"
};

var emojisDatabase = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDict[inputEmoji];

    if (meaning === undefined) {
      meaning = "Emoji is not present in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>yummy in my tummy!</h1>
      <input
        placeholder="Paste the food emoji here"
        style={{ width: "350px", height: "40px" }}
        onChange={emojiInputHandler}
      />

      <h3> Meaning: {meaning} </h3>

      <h3> Currently known emojis: </h3>
      {emojisDatabase.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
