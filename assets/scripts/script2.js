document.addEventListener("DOMContentLoaded", function() {

  const verificacion = document.getElementById("verificacion")
  verificacion.addEventListener("click", function() {
    const q1 = parseInt(document.getElementById("cantidad1").value || 0)
    const q2 = parseInt(document.getElementById("cantidad2").value || 0)
    const q3 = parseInt(document.getElementById("cantidad3").value || 0)
    const total = q1 + q2 + q3
    if (total > 10) {
      output = 'Llevas demasiados stickers'
    } else {
      output = 'llevas ' + total + ' stickers'
    }
    const resultado = document.getElementById('totalstickers')
    resultado.textContent = output
  })
})
