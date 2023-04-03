import { useState } from "react";

const Exercicio08 = () => {
  const [dados, setDados] = useState({
    medidaA: 0,
    medidaB: 0,
    medidaC: 0,
  });

  const areaQuadrado = dados.medidaA * 4;
  const areaTriangulo = (dados.medidaA * dados.medidaB) / 2;
  const areaTrapezio = ((dados.medidaA + dados.medidaB) * dados.medidaC) / 2;

  return (
    <div>
      <h2>Exercício08</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              medidaA: Number(e.target.value),
            }))
          }
          placeholder="Digite a medida A"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              medidaB: Number(e.target.value),
            }))
          }
          placeholder="Digite a medida B"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              medidaC: Number(e.target.value),
            }))
          }
          placeholder="Digite a medida C"
        />

        <br />
        <label>Área do quadrado</label>
        <input type="number" value={areaQuadrado.toFixed(4)} />
        <br />
        <label>Área do triângulo</label>
        <input type="number" value={areaTriangulo.toFixed(4)} />
        <br />
        <label>Área do trapézio</label>
        <input type="number" value={areaTrapezio.toFixed(4)} />
      </form>
    </div>
  );
};

export default Exercicio08;
