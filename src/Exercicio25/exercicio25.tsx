import { useState } from "react";

const [jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez] = Array(12)
  .fill(0)
  .map((x, i) => x + i);

function signos(dataNascimento: string) {
  let [dia, mes] = dataNascimento.split("/").map(Number);
  const data = new Date(2023, mes - 1, dia);

  if (data >= new Date(2023, mar, 21) && data <= new Date(2023, abr, 20)) {
    return "Áries";
  } else if (
    data >= new Date(2023, abr, 21) &&
    data <= new Date(2023, mai, 20)
  ) {
    return "Touro";
  } else if (
    data >= new Date(2023, mai, 21) &&
    data <= new Date(2023, jun, 20)
  ) {
    return "Gêmeos";
  } else if (
    data >= new Date(2023, jun, 21) &&
    data <= new Date(2023, jul, 22)
  ) {
    return "Câncer";
  } else if (
    data >= new Date(2023, jul, 23) &&
    data <= new Date(2023, ago, 22)
  ) {
    return "Leão";
  } else if (
    data >= new Date(2023, ago, 23) &&
    data <= new Date(2023, set, 22)
  ) {
    return "Virgem";
  } else if (
    data >= new Date(2023, set, 23) &&
    data <= new Date(2023, out, 22)
  ) {
    return "Libra";
  } else if (
    data >= new Date(2023, out, 23) &&
    data <= new Date(2023, nov, 21)
  ) {
    return "Escorpião";
  } else if (
    data >= new Date(2023, nov, 22) &&
    data <= new Date(2023, dez, 21)
  ) {
    return "Sagitário";
  } else if (
    data >= new Date(2023, dez, 22) &&
    data <= new Date(2023, jan, 20)
  ) {
    return "Capricórnio";
  } else if (
    data >= new Date(2023, jan, 21) &&
    data <= new Date(2023, fev, 18)
  ) {
    return "Aquário";
  } else if (
    data >= new Date(2023, fev, 19) &&
    data <= new Date(2023, mar, 20)
  ) {
    return "Peixes";
  }
}

const Exercicio25 = () => {
  const [dados, setDados] = useState({ data: "0/0" });

  return (
    <div>
      <h2>Exercício25</h2>
      <form>
        <br />
        <h3>Descubra seu signo</h3>
        <input
          style={{ width: "220px" }}
          type="text"
          onChange={(e) =>
            setDados((x) => ({ ...x, data: String(e.target.value) }))
          }
          placeholder="Digite a data do seu nascimento"
        />
        <br />

        <label>Seu signo é {signos(dados.data)}</label>
        <br />
      </form>
    </div>
  );
};

export default Exercicio25;
