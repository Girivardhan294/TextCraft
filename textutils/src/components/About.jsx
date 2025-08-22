import React,{useState} from 'react'

export default function About(props) {

  return (
<>
<div className='container' style={{border:props.mode === 'dark'?'2px solid white':'2px solid #12343b',padding:"30px",color : props.mode === 'dark'?'white':'#12343b'}}>
    <div>This project is a Text Analyzer Tool designed to make text handling simple and efficient. Users can enter text and perform operations such as converting to uppercase or lowercase, removing extra spaces, copying text, and clearing the input field.</div>
 

    <br />
   
    <ul>
        <li>Convert to Uppercase or Lowercase</li>
        <li>Remove Extra Spaces</li>
        <li>Copy Text </li>
        <li>Clear the Input Field</li>
    </ul>
    
</div>
</>

  )
}