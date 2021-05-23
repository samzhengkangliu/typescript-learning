import React from "react";
import "./App.css";
import Hello from "./components/demo/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name="Sam" />
      </header>
    </div>
  );
}

export default App;
