import React from "react";
import logo from "./logo.svg";
import "./App.css";

//componentes
import Execicio01 from "./Exercicio01/exercicio01";
import Exercicio02 from "./Exercicio02/exercicio02";
import Exercicio03 from "./Exercicio03/exercicio03";
import Exercicio04 from "./Exercicio04/exercicio04";
import Exercicio05 from "./Exercicio05/exercicio05";
import Exercicio06 from "./Exercicio06/exercicio06";
import Exercicio07 from "./Exercicio07/exercicio07";

function App() {
  return (
    <div className="App">
      <Execicio01 />
      <Exercicio02 />
      <Exercicio03 />
      <Exercicio04 />
      <Exercicio05 />
      <Exercicio06 />
      <Exercicio07 />
    </div>
  );
}

export default App;
