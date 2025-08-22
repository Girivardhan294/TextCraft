import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowercase", "success");
  };

  const handleToClear = () => {
    setText("");
    props.showAlert("Cleared", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied", "success");
  };

  const handleExtraSpaces = () => {
    let cleanedText = Text.split(/\s+/).join(" ");
    setText(cleanedText);
    props.showAlert("Removed extra spaces", "success");
  };

  // word count logic
  const wordCount = Text.trim().length > 0 ? Text.trim().split(/\s+/).length : 0;

  return (
    <div
      className="container my-5"
      style={{ color: props.mode === "dark" ? "white" : "#12343b" }}
    >
      <h1>{props.heading}</h1>

      <div className="my-4">
        <textarea
          className="form-control"
          value={Text}
          onChange={handleOnChange}
          id="mybox"
          rows="10"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "#12343b",
          }}
        ></textarea>
      </div>

      <div className="container p-3">
        <button className="btn btn-primary mx-1 p-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-1 p-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1 p-2" onClick={handleToClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 p-2" onClick={handleCopy}>
          Copy
        </button>
        <button
          className="btn btn-primary mx-1 p-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#12343b" }}
      >
        <h3>Text Summary</h3>
        <p>
          {wordCount} words and {Text.length} characters
        </p>
        <p>{0.008 * wordCount} Minutes Read</p>
        <h3>Preview</h3>
        <p>{Text.length > 0 ? Text : "Enter something to preview here"}</p>
      </div>
    </div>
  );
}
