import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#12343b";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
  
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={
              <Textform
                heading="Enter the text to analyze"
                alert={alert}
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
          <Route path="/About" element={<About mode={mode}  togglemode={togglemode} />} />
        </Routes>
      </div>
      
   </>
  );
}

export default App;