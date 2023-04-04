import { useState } from "react";

function baskara(a: number, b: number, c: number) {
  var delta = Math.pow(b, 2) - 4 * a * c;
  var x1 = (-b + Math.sqrt(delta)) / (2 * a);
  var x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
}

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

  //   const [x1, x2] = baskara(
  //     dados.coeficienteA,
  //     dados.coeficienteB,
  //     dados.coeficienteC
  //   );

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
