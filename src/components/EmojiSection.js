import React, { useState } from "react";
import AnswerSection from "./AnswerSection";
import "./answerSection.css"

export default function EmojiSetions() {
  const [emoji, setEmoji] = useState("");
  const [answer, setAnswer] = useState(false);

  const onEmojiChange = (e) => {
    if (answer) {
      setAnswer(false);
    }
    setEmoji(e.target.value);
  };

  const renderAnswer = () => {
    setAnswer(true);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your emoji here!"
        onChange={(e) => onEmojiChange(e)}
        value={emoji}
        style={{ margin: "1rem", padding: "8px" }}

      />
      <br />
      <button
        style={{ margin: "1rem", padding: "8px" }}
        onClick={() => renderAnswer()}
      >
        Show
      </button>

      <AnswerSection
        emoji={emoji}
        showAnswer={answer}
        setAnswer={setAnswer}
        setEmoji={setEmoji}
      />
    </>
  );
}
