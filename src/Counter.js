import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const letterCount = text.length;
  const clearText = () => setText("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <textarea
        placeholder="Type here..."
        onChange={handleTextChange}
        value={text}
        rows={5}
        cols={50}
      />
      <div className="counterBox">
        <p>Word Count: {wordCount}</p>
        <p>Letter Count: {letterCount}</p>
      </div>
      <button onClick={clearText} className="clear-btn">
        Clear
      </button>
    </div>
  );
}

export default Counter;
