import { useState } from "react";

const Exercicio24 = () => {
  const [numeros, setNumeros] = useState([0, 0, 0, 0, 0]);

  return (
    <div>
      <h2>Exercício24</h2>
      <form>
        <br />
        <h3>Digite os cincos valores</h3>
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setNumeros((x) => {
              x[0] = Number(e.target.value);
              return [...x];
            })
          }
          placeholder="Digite o primeiro valor"
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
          placeholder="Digite o segundo valor"
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
          placeholder="Digite o terceiro valor"
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
          placeholder="Digite o quarto valor"
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
          placeholder="Digite o quinto valorS"
        />
        <br />

        <label>Ordenados: {[...numeros].sort((x, y) => x - y).join(",")}</label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio24;
