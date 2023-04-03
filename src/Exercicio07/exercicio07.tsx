import { useState } from "react";

const Exercicio07 = () => {
  const [dados, setDados] = useState({
    distanciaPercorrida: 0,
    combustivelGasto: 0,
  });

  const mediaConsumo = dados.distanciaPercorrida / dados.combustivelGasto;

  return (
    <div>
      <h2>Exercício07</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              distanciaPercorrida: Number(e.target.value),
            }))
          }
          placeholder="Digite a distância percorrida"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              combustivelGasto: Number(e.target.value),
            }))
          }
          placeholder="Digite o combustível gasto"
        />

        <br />
        <label>Consumo médio</label>
        <input type="number" value={mediaConsumo.toFixed(3)} />
      </form>
    </div>
  );
};

export default Exercicio07;
