import { useState } from "react";

function somar(valorFinal: number, valorInicial: number) {
  let soma = 0;
  for (let i = valorInicial; i <= valorFinal; i++) {
    soma += i;
  }
  return soma;
}

const Exercicio20 = () => {
  const [dados, setDados] = useState({
    valorFinal: 0,
    valorInicial: 0,
  });

  return (
    <div>
      <h2>Exercício20</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, valorInicial: Number(e.target.value) }))
          }
          placeholder="Digite o número inicial"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, valorFinal: Number(e.target.value) }))
          }
          placeholder="Digite o número Final"
        />
        <br />

        <label>
          O resultado é : {somar(dados.valorFinal, dados.valorInicial)}
        </label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio20;
