import { useState } from "react";

const numeroPorExtenso: { [key: number]: string } = {
  1: "um",
  2: "dois",
  3: "tres",
  4: "quatro",
  5: "cinco",
  6: "seis",
  7: "sete",
  8: "oito",
  9: "nove",
  10: "dez",
  11: "onze",
  12: "doze",
  13: "treze",
  14: "quatorze",
  15: "quinze",
  16: "dezesseis",
  17: "dezessete",
  18: "dezoito",
  19: "dezenove",
  20: "vinte",
  30: "trinta",
  40: "quarenta",
  50: "cinquenta",
  60: "sessenta",
  70: "setenta",
  80: "oitenta",
  90: "noventa",
};

function formatarNumero(numero: number) {
  if (numero <= 0 || numero > 99) return "";
  const todosNumeros: number[] = [];
  const numerosTotais = Object.keys(numeroPorExtenso).map(Number).reverse();

  while (numero > 0) {
    var valorEncontrado = numerosTotais.find((x) => x <= numero);

    if (!valorEncontrado) continue;

    todosNumeros.push(valorEncontrado);
    if (valorEncontrado) {
      numero -= valorEncontrado;
    }
  }

  const primeiroNumero = todosNumeros[0];
  if (!primeiroNumero) return "";

  let numeroFormatado = "";

  for (let i = 0; i < todosNumeros.length; i++) {
    if (i === 0) {
      numeroFormatado += numeroPorExtenso[todosNumeros[i]];
    } else {
      numeroFormatado += ` e ${numeroPorExtenso[todosNumeros[i]]}`;
    }
  }

  return numeroFormatado;
}
const Exercicio30 = () => {
  const [numeros, setNumeros] = useState(0);

  return (
    <div>
      <h2>Exercício30</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="number"
          onChange={(e) => setNumeros(Number(e.target.value))}
          placeholder="Digite um número"
        />

        <br />

        <label>Saída: {formatarNumero(numeros)}</label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio30;
