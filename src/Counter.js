import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  // State for storing the text input by the user
  const [text, setText] = useState("");
  // Calculate the number of words (split by spaces, ignoring extra spaces)
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  // Calculate the total number of characters in the input text
  const letterCount = text.length;
  // Function to clear the input text
  const clearText = () => setText("");

  // Function to handle changes in the text area and update the state
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container">
      <textarea
        placeholder="Type here..."
        onChange={handleTextChange} // Update state on text change
        value={text} // Bind the state to the textarea value
        rows={5}
        cols={56}
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
