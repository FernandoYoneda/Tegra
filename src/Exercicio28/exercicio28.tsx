import { useState } from "react";

function ordenarMaiorMenor(numeros: number[]) {
  const ordenados = numeros.sort((x, y) => x - y);
  return [ordenados[0], ordenados[ordenados.length - 1]];
}

const Exercicio28 = () => {
  const [numeros, setNumeros] = useState([0, 0, 0, 0, 0]);
  const [menor, maior] = ordenarMaiorMenor([...numeros]);

  return (
    <div>
      <h2>Exercício28</h2>
      <form>
        <br />
        <h3>Digite os cincos números</h3>
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setNumeros((x) => {
              x[0] = Number(e.target.value);
              return [...x];
            })
          }
          placeholder="Digite o primeiro número"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setNumeros((x) => {
              x[1] = Number(e.target.value);
              return [...x];
            })
          }
          placeholder="Digite o segundo número"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setNumeros((x) => {
              x[2] = Number(e.target.value);
              return [...x];
            })
          }
          placeholder="Digite o terceiro número"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setNumeros((x) => {
              x[3] = Number(e.target.value);
              return [...x];
            })
          }
          placeholder="Digite o quarto número"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setNumeros((x) => {
              x[4] = Number(e.target.value);
              return [...x];
            })
          }
          placeholder="Digite o quinto número"
        />
        <br />

        <label>Menor número: {menor}</label>
        <br />
        <label>Maior númeors: {maior}</label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio28;
