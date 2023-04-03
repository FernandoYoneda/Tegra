import { useState } from "react";

const Exercicio02 = () => {
  const [dados, setDados] = useState({ base: 0, altura: 0 });

  const area = dados.base * dados.altura;
  const perimetro = 2 * (dados.base + dados.altura);
  const diagonal = Math.sqrt(
    Math.pow(dados.base, 2) + Math.pow(dados.altura, 2)
  );

  return (
    <div>
      <h2>Exercício02</h2>
      <form>
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, base: Number(e.target.value) }))
          }
          placeholder="Digite a base do retângulo"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, altura: Number(e.target.value) }))
          }
          placeholder="Digite a altura do retângulo"
        />
        <br />
        <label>Área</label>
        <input type="number" value={area.toFixed(4)} />
        <br />
        <label>Perímetro</label>
        <input type="number" value={perimetro.toFixed(4)} />
        <br />
        <label>Diagonal</label>
        <input type="number" value={diagonal.toFixed(4)} />
      </form>
    </div>
  );
};

export default Exercicio02;
