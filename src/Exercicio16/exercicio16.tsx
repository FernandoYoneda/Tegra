import { useState } from "react";

const Exercicio16 = () => {
  const [dados, setDados] = useState({
    primeiraDistancia: 0,
    segundaDistancia: 0,
    terceiraDistancia: 0,
  });

  return (
    <div>
      <h2>Exercício16</h2>
      <form>
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              primeiraDistancia: Number(e.target.value),
            }))
          }
          placeholder="Digite a primeira distância"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              segundaDistancia: Number(e.target.value),
            }))
          }
          placeholder="Digite a segunda distância"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              terceiraDistancia: Number(e.target.value),
            }))
          }
          placeholder="Digite a terceira distância"
        />
        <br />
        <label>MAIOR DISTÂNCIA</label>
        <input
          style={{ width: "320px" }}
          type="text"
          value={Math.max(
            dados.primeiraDistancia,
            dados.segundaDistancia,
            dados.terceiraDistancia
          ).toFixed(2)}
        />
      </form>
    </div>
  );
};

export default Exercicio16;
