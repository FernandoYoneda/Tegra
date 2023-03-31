import { useState } from "react";

const Exercicio04 = () => {
  const [dados, setDados] = useState({
    precoUnitario: 0,
    quantidadeComprada: 0,
    dinheiroRecebido: 0,
  });

  const troco =
    dados.dinheiroRecebido - dados.precoUnitario * dados.quantidadeComprada;

  return (
    <div>
      <h2>Exercício04</h2>
      <form>
        <input
          size={120}
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, precoUnitario: Number(e.target.value) }))
          }
          placeholder="Digite o valor unitário do produto"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              quantidadeComprada: Number(e.target.value),
            }))
          }
          placeholder="Digite quantidade de produto comprado"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              dinheiroRecebido: Number(e.target.value),
            }))
          }
          placeholder="Digite dinheiro recebido"
        />
        <br />
        <input type="number" value={(troco > 0 ? troco : 0).toFixed(2)} />
      </form>
    </div>
  );
};

export default Exercicio04;
