import { useState } from "react";

const Exercicio06 = () => {
  const [dados, setDados] = useState({
    nome: "",
    valorPorHora: 0,
    horasTrabalhadas: 0,
  });

  const media = dados.valorPorHora * dados.horasTrabalhadas;

  return (
    <div>
      <h2>Exercício06</h2>
      <form>
        <input
          type="text"
          onChange={(e) => setDados((x) => ({ ...x, nome: e.target.value }))}
          placeholder="Digite o nome"
        />
        <input
          type="number"
          onChange={(e) =>
            setDados((x) => ({ ...x, valorPorHora: Number(e.target.value) }))
          }
          placeholder="Digite o valor por hora"
        />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) =>
            setDados((x) => ({
              ...x,
              horasTrabalhadas: Number(e.target.value),
            }))
          }
          placeholder="Digite as horas trabalhadas"
        />
        <br />
        <textarea
          rows={4}
          cols={50}
          value={
            media <= 0 || !dados.nome
              ? ""
              : `O pagamento para ${dados.nome} deve ser ${media}`
          }
        />
      </form>
    </div>
  );
};

export default Exercicio06;
