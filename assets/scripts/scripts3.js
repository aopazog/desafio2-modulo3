document.addEventListener("DOMContentLoaded",function(){
  const  ingresar = document.getElementById("Ingresar")
  ingresar.addEventListener("click", function() {
    const n1 = (document.getElementById("n1").value)
    const n2 = (document.getElementById("n2").value)
    const n3 = (document.getElementById("n3").value)
    const clave = n1 + n2 + n3

    if (clave == "911") {
      output = "password 1 correcto"
    } else if (clave == "714") {
      output = "password 2 correcto"
    } else {
      output = "password incorrecto"
    }
    const resultado = document.getElementById("Resultado")
    resultado.textContent = output
  })
})