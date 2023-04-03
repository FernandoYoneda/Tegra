import { useState } from "react";

const Execicio01 = () => {
  const [dados, setDados] = useState({ largura: 0, comprimento: 0, valor: 0 });

  const areaTerreno = dados.comprimento * dados.largura;
  const valorTerreno = areaTerreno * dados.valor;

  return (
    <div>
      <h2>Exercício01</h2>
      <form>
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, largura: Number(e.target.value) }))
          }
          placeholder="Digite a largura do terreno"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, comprimento: Number(e.target.value) }))
          }
          placeholder="Digite a comprimento do terreno"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, valor: Number(e.target.value) }))
          }
          placeholder="Digite a valor do terreno"
        />
        <br />
        <label>Área do terreno</label>
        <input type="number" value={areaTerreno.toFixed(2)} />
        <br />
        <label>Preço do terreno</label>
        <input type="number" value={valorTerreno.toFixed(2)} />
      </form>
    </div>
  );
};

export default Execicio01;
