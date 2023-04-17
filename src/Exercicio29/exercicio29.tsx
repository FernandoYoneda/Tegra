import { useState } from "react";

// Tirei a regra de válidação do cnpj no link https://www.macoratti.net/alg_cnpj.htm

const algarismosPrimeiroDigito = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
const algarismosSegundoDigito = [6, ...algarismosPrimeiroDigito];

function validarCnpj(cnpjComCaracteresEspeciais: string) {
  if (!cnpjComCaracteresEspeciais || cnpjComCaracteresEspeciais.length !== 18) {
    return false;
  }
  const cnpj = cnpjComCaracteresEspeciais
    .replaceAll(".", "")
    .replaceAll("/", "")
    .replaceAll("-", "");
  const cnpjSemDigitoVerificados = cnpj.substring(
    0,
    algarismosPrimeiroDigito.length
  );

  let somaPrimeiroDigito = 0;

  for (let i = 0; i < cnpjSemDigitoVerificados.length; i++) {
    somaPrimeiroDigito +=
      Number(cnpjSemDigitoVerificados[i]) * algarismosPrimeiroDigito[i];
  }

  const restoPrimeiroDigito = somaPrimeiroDigito % 11;
  const primeiroDigito =
    restoPrimeiroDigito >= 2 ? 11 - restoPrimeiroDigito : 0;
  const cnpjComPrimeiroDigito = cnpjSemDigitoVerificados + primeiroDigito;

  let somaSegundoDigito = 0;

  for (let i = 0; i < cnpjComPrimeiroDigito.length; i++) {
    somaSegundoDigito +=
      Number(cnpjComPrimeiroDigito[i]) * algarismosSegundoDigito[i];
  }

  const restoSegundoDigito = somaSegundoDigito % 11;

  const segundoDigito = restoSegundoDigito >= 2 ? 11 - restoSegundoDigito : 0;

  return cnpjSemDigitoVerificados + primeiroDigito + segundoDigito === cnpj;
}
const Exercicio29 = () => {
  const [numeros, setNumeros] = useState("");

  const cnpjValido = validarCnpj(numeros);

  return (
    <div>
      <h2>Exercício29</h2>
      <form>
        <br />
        <input
          style={{ width: "220px" }}
          type="text"
          onChange={(e) => setNumeros(e.target.value)}
          placeholder="Digite o número do cnpj"
        />

        <br />

        <label>Saída: {cnpjValido ? "Válido" : "Inválido"}</label>

        <br />
      </form>
    </div>
  );
};

export default Exercicio29;
