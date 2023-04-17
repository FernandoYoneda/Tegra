import { useState } from "react";

const vogais = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "á",
  "â",
  "â",
  "à",
  "é",
  "è",
  "ê",
  "ê",
  "í",
  "ì",
  "î",
  "î",
  "ó",
  "ò",
  "ô",
  "ô",
  "ú",
  "ù",
  "û",
  "û",
];

function calcularVogaisCosoantes(palavra: string) {
  let totalVogais = 0;
  let totalConsoantes = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i] === " ") continue;
    if (vogais.includes(palavra[i])) totalVogais++;
    else totalConsoantes++;
  }
  return [totalVogais, totalConsoantes];
}

const Exercicio26 = () => {
  const [dados, setDados] = useState("");

  const [vogais, consoantes] = calcularVogaisCosoantes(dados.toLowerCase());

  return (
    <div>
      <h2>Exercício26</h2>
      <form>
        <br />
        <h3>Descubra seu signo</h3>
        <input
          style={{ width: "220px" }}
          type="text"
          onChange={(e) => setDados((x) => e.target.value)}
          placeholder="Digite uma palavra"
        />
        <br />

        <label>Números de vogais: {vogais}</label>
        <br />
        <label>Números de consoantes: {consoantes}</label>
        <br />
      </form>
    </div>
  );
};

export default Exercicio26;
