import { useState } from "react";

const Exercicio11 = () => {
  const [dados, setDados] = useState({
    primeiraNota: 0,
    segundaNota: 0,
  });

  const notaFinal = dados.primeiraNota + dados.segundaNota;

  return (
    <div>
      <h2>Exercício11</h2>
      <form>
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              primeiraNota: Number(e.target.value),
            }))
          }
          placeholder="Digite  primeira nota"
        />
        <input
          style={{ width: "270px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              segundaNota: Number(e.target.value),
            }))
          }
          placeholder="Digite a segunda nota"
        />

        <br />
        <label> Nota final</label>
        <input type="text" value={notaFinal.toFixed(1)} />
        <textarea
          rows={4}
          cols={50}
          value={notaFinal && notaFinal >= 60 ? "Aprovado" : "Reprovado"}
        />
      </form>
    </div>
  );
};

export default Exercicio11;
