import { useState } from "react";

const Exercicio03 = () => {
  const [dados, setDados] = useState({
    nome1: "",
    nome2: "",
    idade1: 0,
    idade2: 0,
  });

  const media = (dados.idade1 + dados.idade2) / 2;

  return (
    <div>
      <h2>Exercício03</h2>
      <form>
        <input
          type="text"
          onChange={(e) => setDados((x) => ({ ...x, nome1: e.target.value }))}
          placeholder="Digite o nome 2"
        />
        <input
          type="text"
          onChange={(e) => setDados((x) => ({ ...x, nome2: e.target.value }))}
          placeholder="Digite o nome 2"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, idade1: Number(e.target.value) }))
          }
          placeholder="Digite a idade 1"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, idade2: Number(e.target.value) }))
          }
          placeholder="Digite a idade 2"
        />
        <br />
        <textarea
          rows={4}
          cols={50}
          value={
            media <= 0 || !dados.nome1 || !dados.nome2
              ? ""
              : `A idade média de ${dados.nome1} e ${
                  dados.nome2
                } é de ${media.toFixed(1)} anos`
          }
        />
      </form>
    </div>
  );
};

export default Exercicio03;
