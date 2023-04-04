import { useState } from "react";

const Exercicio15 = () => {
  const [dados, setDados] = useState({
    medidaGlicose: 0,
  });

  return (
    <div>
      <h2>Exercício15</h2>
      <form>
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, medidaGlicose: Number(e.target.value) }))
          }
          placeholder="Digite a medida de glicose"
        />
        <br />
        {dados.medidaGlicose <= 100 && (
          <input style={{ width: "320px" }} type="text" value={"Normal"} />
        )}
        {dados.medidaGlicose > 100 && dados.medidaGlicose <= 140 && (
          <input type="text" value={"Elevado"} />
        )}
        {dados.medidaGlicose > 140 && <input type="text" value={"Diabetes"} />}
      </form>
    </div>
  );
};

export default Exercicio15;
