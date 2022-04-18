let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let dato1 = <HTMLInputElement>document.getElementById("dato1");
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");

//sigue el codigo
btnEnviar.addEventListener("click", () => {
  let primerNumero = Number(prompt("Ingrese un numero"));
  let segundoNumero = Number(prompt("Ingrese un numero"));
  let suma: number = 0;

  while (primerNumero <= segundoNumero) {
    suma = suma + primerNumero;
    primerNumero = primerNumero + 1;
  }
  console.log("La suma total es:", suma);
});
