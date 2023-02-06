var ethereum = 0.000124;
var resultado;

function TempConvert() {
  var valor = document.getElementById("reais").value;

  if (isNaN(valor) || valor === "") {
    alert("Digite um número válido!");
    return;
  } else {
    resultado = parseFloat(valor) * 0.000124;
  }
  document.getElementById("resultado").value = parseFloat(resultado).toFixed(2);
}
