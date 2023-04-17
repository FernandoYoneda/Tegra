import { useState } from "react";

const Exercicio27 = () => {
  const [palavra, setPalavras] = useState("");
  const palavraReversa = palavra.split("").reverse().join("");

  return (
    <div>
      <h2>Exercício27</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="text"
          onChange={(e) => setPalavras((x) => e.target.value)}
          placeholder="Digite uma palavra"
        />
        <br />

        {palavra === palavraReversa ? "é palíndromo" : "não é palíndromo"}
        <br />
      </form>
    </div>
  );
};

export default Exercicio27;
