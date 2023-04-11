import { useState } from "react";

enum TiposTemperatura {
  celsius = "C",
  fahrenheit = "F",
}

function converterTemperatura(tipo: TiposTemperatura, valor: number) {
  switch (tipo) {
    case TiposTemperatura.celsius:
      return valor * 1.8 + 32;
    case TiposTemperatura.fahrenheit:
      return (valor - 32) * (5 / 9);
    default:
      return 0;
  }
}

const Exercicio18 = () => {
  const [dados, setDados] = useState({
    tipo: TiposTemperatura.celsius,
    valor: 0,
  });

  return (
    <div>
      <h2>Exercício18</h2>
      <form>
        <label>Selecione tipos de temperaturas</label>
        <br />
        <select
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              tipo: e.target.value as TiposTemperatura,
            }))
          }
          name="temperatura"
        >
          <option value={TiposTemperatura.celsius}>Celsius:</option>
          <option value={TiposTemperatura.fahrenheit}>Fahrenheit:</option>
        </select>
        <br />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              valor: Number(e.target.value),
            }))
          }
          placeholder="Digite a temperatura"
        />
        <br />
        <label>
          Temperatura equivalente em {""}
          {dados.tipo === TiposTemperatura.celsius ? "Fahrenheit" : "Celsius"}:
          {converterTemperatura(dados.tipo, dados.valor).toFixed(2)}
        </label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio18;
