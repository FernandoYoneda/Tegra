import { useState } from "react";

const Exercicio14 = () => {
  const [dados, setDados] = useState({
    precoUnitario: 0,
    quantidadeComprada: 0,
    dinheiroRecebido: 0,
  });

  const valorTotal = dados.precoUnitario * dados.quantidadeComprada;

  const dinheiroFaltando = valorTotal - dados.dinheiroRecebido;

  const troco = dados.dinheiroRecebido - valorTotal;

  return (
    <div>
      <h2>Exercício14</h2>
      <form>
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, precoUnitario: Number(e.target.value) }))
          }
          placeholder="Digite o valor unitário do produto"
        />
        <input
          style={{ width: "270px" }}
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
        {dados.dinheiroRecebido < valorTotal && (
          <input
            style={{ width: "320px" }}
            type="text"
            value={`DINHEIRO INSUFICIENTE. FALTAM ${dinheiroFaltando.toFixed(
              2
            )} REAIS`}
          />
        )}
        {dados.dinheiroRecebido === valorTotal && (
          <input type="text" value={"0.00"} />
        )}
        {dados.dinheiroRecebido > valorTotal && (
          <input type="text" value={troco.toFixed(2)} />
        )}
      </form>
    </div>
  );
};

export default Exercicio14;
