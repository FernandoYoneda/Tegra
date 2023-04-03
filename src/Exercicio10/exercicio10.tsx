import { useState } from "react";

const Exercicio10 = () => {
  const [dados, setDados] = useState({
    primeiroValor: 0,
    segundoValor: 0,
    terceiroValor: 0,
  });

  return (
    <div>
      <h2>Exercício10</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              primeiroValor: Number(e.target.value),
            }))
          }
          placeholder="Digite o primeiro valor"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              segundoValor: Number(e.target.value),
            }))
          }
          placeholder="Digite o segundo valor"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              terceiroValor: Number(e.target.value),
            }))
          }
          placeholder="Digite o terceiro valor"
        />

        <br />
        <label> Menor Valor</label>
        <input
          type="number"
          value={Math.min(
            dados.primeiroValor,
            dados.segundoValor,
            dados.terceiroValor
          )}
        />
      </form>
    </div>
  );
};

export default Exercicio10;
