import { useState } from "react";

function valorPar(valorFinal: number) {
  let pares = [];
  for (let i = 0; i <= valorFinal; i++) {
    if (i % 2 === 0) {
      pares.push(i);
    }
  }
  return pares;
}

const Exercicio21 = () => {
  const [dados, setDados] = useState({
    x: 0,
  });

  const pares = valorPar(dados.x);

  return (
    <div>
      <h2>Exercício21</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((z) => ({ ...z, x: Number(e.target.value) }))
          }
          placeholder="Digite o valor de X"
        />

        <br />

        <div>
          <ul>
            {pares.map((n) => (
              <li>{n}</li>
            ))}
          </ul>
        </div>

        <br />
      </form>
    </div>
  );
};

export default Exercicio21;
