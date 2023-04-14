import { useState } from "react";

function tabuada(n: number) {
  let numeroTabuada = [];
  for (let i = 1; i <= 10; i++) {
    numeroTabuada.push([i, n, i * n]);
  }
  return numeroTabuada;
}

const Exercicio22 = () => {
  const [dados, setDados] = useState({
    n: 0,
  });

  const valorTabuada = tabuada(dados.n);

  return (
    <div>
      <h2>Exercício22</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, n: Number(e.target.value) }))
          }
          placeholder="Deseja a tabuada de qual valor?"
        />

        <br />

        <div>
          <ul>
            {valorTabuada.map(([i, n, tabuada]) => (
              <li>
                {i}x{n}={tabuada}
              </li>
            ))}
          </ul>
        </div>

        <br />
      </form>
    </div>
  );
};

export default Exercicio22;
