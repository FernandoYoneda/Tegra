import { useState } from "react";

function converterHorasMinutosSegundos(tempoSegundos: number) {
  // no exemplo que me foi passado está assim (Digite a duração em segundos: 1250 3:28:26)
  // Porém a função de segundos  que está no codigo não está aredondando para cima igual no exemplo

  var horas = tempoSegundos / 3600;
  var minutos = (horas % 1) * 60;
  var segundos = (minutos % 1) * 60;

  return [Math.trunc(horas), Math.trunc(minutos), Math.trunc(segundos)].join(
    ":"
  );
}

const Exercicio09 = () => {
  const [dados, setDados] = useState({ segundo: 0 });

  return (
    <div>
      <h2>Exercício09</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              segundo: Number(e.target.value),
            }))
          }
          placeholder="Digite a duração em segundos"
        />

        <br />
        <label>Horas:minutos:segundos</label>
        <input
          type="text"
          value={converterHorasMinutosSegundos(dados.segundo)}
        />
        <br />
      </form>
    </div>
  );
};

export default Exercicio09;
