import React from "react";
import { emojiDB } from "../database/emoji";
import "./answerSection.css";

export default function AnswerSection({
  emoji,
  showAnswer,
  setAnswer,
  setEmoji
}) {
  const emojiFromDB = Object.keys(emojiDB);
  const showeEmojiOnClick = (cur) => {
    setEmoji(cur);
    setAnswer(true);
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "1rem" }}
      >
        {emojiFromDB.map((cur, idx) => {
          return (
            <p
              key={idx}
              onClick={() => showeEmojiOnClick(cur)}
              className="singleEmoji"
            >
              {" "}
              {cur}{" "}
            </p>
          );
        })}
      </div>
      {showAnswer && (
        <p
        className="answer"
        >
         
          {emojiDB[emoji] === undefined
            ? "No such emoji in our DB"
            : emojiDB[emoji]}{" "}
        </p>
      )}
    </>
  );
}
