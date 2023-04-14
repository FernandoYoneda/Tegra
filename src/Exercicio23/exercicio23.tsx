import { useState } from "react";

function somarImpar(valorFinal: number, valorInicial: number) {
  let numerosImpares = 0;
  for (let i = valorInicial + 1; i < valorFinal; i++) {
    if (i % 2 !== 0) {
      numerosImpares += i;
    }
  }
  return numerosImpares;
}

const Exercicio23 = () => {
  const [dados, setDados] = useState({
    valorFinal: 0,
    valorInicial: 0,
  });

  return (
    <div>
      <h2>Exercício23</h2>
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
          O resultado é : {somarImpar(dados.valorFinal, dados.valorInicial)}
        </label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio23;
