import React from 'react';
import './App.css';
import { xmlFromString } from "./xmlHelper";

function App() {

  const printXml = () => {
    try {
      console.log(xmlFromString("<a><b><c><d><e><f></f></e></d></c></b></a>"))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Press button to get xml output in console
        </p>
        <button onClick={printXml}>Print XML</button>
      </header>
    </div>
  );
}

export default App;
