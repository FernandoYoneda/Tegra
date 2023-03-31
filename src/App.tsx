import React from "react";
import logo from "./logo.svg";
import "./App.css";

//componentes
import Execicio01 from "./Exercicio01/exercicio01";
import Exercicio02 from "./Exercicio02/exercicio02";
import Exercicio03 from "./Exercicio03/exercicio03";
import Exercicio04 from "./Exercicio04/exercicio04";

function App() {
  return (
    <div className="App">
      <Execicio01 />
      <Exercicio02 />
      <Exercicio03 />
      <Exercicio04 />
    </div>
  );
}

export default App;
