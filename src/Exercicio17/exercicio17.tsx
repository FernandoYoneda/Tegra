import { useState } from "react";

const Exercicio17 = () => {
  const [dados, setDados] = useState({
    primeiraNumero: 0,
    segundaNumero: 0,
  });

  return (
    <div>
      <h2>Exercício17</h2>
      <form>
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              primeiraNumero: Number(e.target.value),
            }))
          }
          placeholder="Digite o primeiro número"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              segundaNumero: Number(e.target.value),
            }))
          }
          placeholder="Digite o segundo número"
        />

        <br />
        {dados.primeiraNumero % dados.segundaNumero === 0 ||
        dados.segundaNumero % dados.primeiraNumero === 0
          ? "São múltiplos"
          : "Não são múltiplos"}
      </form>
    </div>
  );
};

export default Exercicio17;
