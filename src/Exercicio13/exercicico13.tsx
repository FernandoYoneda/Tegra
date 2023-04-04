import { useState } from "react";

const Exercicio13 = () => {
  const [dados, setDados] = useState({
    quantidadeMinutos: 0,
  });

  const totalExcedenter =
    dados.quantidadeMinutos > 100 ? (dados.quantidadeMinutos - 100) * 2 : 0;

  const totalPagar = 50 + totalExcedenter;

  return (
    <div>
      <h2>Exercício13</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              quantidadeMinutos: Number(e.target.value),
            }))
          }
          placeholder="Digite a quantidade de minutos"
        />
        <br />
        <label>Valor a pagar</label>
        <input
          type="text"
          value={new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(totalPagar)}
        />
      </form>
    </div>
  );
};

export default Exercicio13;
