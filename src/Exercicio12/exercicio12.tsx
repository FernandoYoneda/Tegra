import { useState } from "react";

const Exercicio12 = () => {
  const [dados, setDados] = useState({
    coeficienteA: 0,
    coeficienteB: 0,
    coeficienteC: 0,
  });

  const delta =
    Math.pow(dados.coeficienteB, 2) -
    4 * dados.coeficienteA * dados.coeficienteC;

  const x1 =
    (-dados.coeficienteB + Math.sqrt(delta)) / (2 * dados.coeficienteA);

  const x2 =
    (-dados.coeficienteB - Math.sqrt(delta)) / (2 * dados.coeficienteA);

  return (
    <div>
      <h2>Exercício12</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              coeficienteA: Number(e.target.value),
            }))
          }
          placeholder="Digite o coeficiente A"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              coeficienteB: Number(e.target.value),
            }))
          }
          placeholder="Digite o coeficente B"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              coeficienteC: Number(e.target.value),
            }))
          }
          placeholder="Digite o coeficiente C"
        />

        <br />
        {delta < 0 ? (
          <label>Esta equação não possui raízes reais</label>
        ) : (
          <>
            <label> Valor x1</label>
            <input type="number" value={x1.toFixed(3)} />
            <br />
            <label> Valor x2</label>
            <input type="number" value={x2.toFixed(3)} />
          </>
        )}
      </form>
    </div>
  );
};

export default Exercicio12;
