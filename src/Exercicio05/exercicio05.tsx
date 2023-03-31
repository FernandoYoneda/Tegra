import { useState } from "react";

const Exercicio05 = () => {
  const [dados, setDados] = useState({
    valorRaioCirculo: 0,
  });

  const area = Math.PI * Math.pow(dados.valorRaioCirculo, 2);

  return (
    <div>
      <h2>Exercício05</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              valorRaioCirculo: Number(e.target.value),
            }))
          }
          placeholder="Digite o valor do raio do círculo"
        />
        <br />
        <input type="number" value={area.toFixed(3)} />
      </form>
    </div>
  );
};

export default Exercicio05;
