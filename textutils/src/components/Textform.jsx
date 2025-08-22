import React, { useState } from "react";

export default function Textform(props) {
  const [Text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("changed to uppercase","success")
  };
  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("changed to lowercase","success")
  };
  const handleToClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("cleared","success")
  };
  const handlecopy =()=>{
  var text = document.getElementById('mybox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("copied","success")
  }
  const handleextraspaces = () => {
    let cleanedText = Text.trim().split(/\s+/).join(" ");
    setText(cleanedText);
    props.showAlert("cleaned text","success")
   
  };
  
  // setText('new text');
  return (
    <>
      <div className="container my-5"  style={{color : props.mode === 'dark'?'white':'#12343b'}}>
        <h1>{props.heading}</h1>
        <div className="my-4">
          <textarea
            className="form-control"
            value={Text}
            onChange={handleOnChange}
            id="mybox"
            rows="10"
            style={{backgroundColor : props.mode === 'dark'?'grey':'white',color : props.mode === 'dark'?'white':'#12343b'}}
          ></textarea>
        </div>

        
          <button className="btn btn-primary mx-1" onClick={handleUpClick} >
            Convert To UpperCase
          </button>
      

          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Convert To LowerCase
          </button>
       
        <button className="btn btn-primary mx-1 " onClick={handleToClear}>
            Clear
          </button>
          <button className="btn btn-primary mx-1" onClick={handlecopy}>Copy</button>
          <button className="btn btn-primary mx-1" onClick={handleextraspaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3"style={{color : props.mode === 'dark'?'white':'#12343b'}}>
        <h3 > Text Summary</h3>
        <p >{Text.trim().split(/\s+/).join().length} words and {Text.length} characters</p>
        <p >{0.008 * Text.split(" ").length} Minutes Read</p>
        <h3 >Preview</h3>
        <p>{Text.length>0?Text:"Enter something to preview here"} </p>
      </div>
    </>
  );
}