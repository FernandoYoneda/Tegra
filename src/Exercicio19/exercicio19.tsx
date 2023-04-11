import { useState } from "react";

const Exercicio19 = () => {
  const [meuSalario, setMeuSalario] = useState(0);

  const salarios = [
    { de: -Infinity, ate: 999.99, pctAumento: 20 / 100 },
    { de: 1000.0, ate: 2999.99, pctAumento: 15 / 100 },
    { de: 3000.0, ate: 7999.99, pctAumento: 10 / 100 },
    { de: 8000.0, ate: Infinity, pctAumento: 0.5 / 100 },
  ];

  const encontrado = salarios.find(
    (e) => meuSalario >= e.de && meuSalario >= e.ate
  );

  return (
    <div>
      <h2>Exercício19</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) => setMeuSalario(Number(e.target.value))}
          placeholder="Digite o salario da pessoa"
        />
        <br />
        {encontrado && (
          <>
            <label>
              Novo salário {encontrado.pctAumento * meuSalario + meuSalario}
            </label>
            <br />
            <label>Aumento {encontrado.pctAumento * meuSalario}</label>
            <br />
            <label>Porcentagem {encontrado.pctAumento * 100}%</label>
          </>
        )}
        <br />
      </form>
    </div>
  );
};

export default Exercicio19;
