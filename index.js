/**
 * Código de manejo del formulario
 */

// Inputs del formulario
const name     = document.querySelector('#name')
const lastName = document.querySelector('#lastName')
const age      = document.querySelector('#age')
const phone    = document.querySelector('#phone')

// Alerta
const alerta = document.querySelector('.alert')

// Overlay de una alerta y click al overlay
const overlay = document.querySelector('.alert_overlay')
overlay.addEventListener('click', closeAlert)

// botón del formulario y click al botón
const button = document.querySelector('#buttonEnviar')
button.addEventListener('click', imprimirValores)


/**
 * esta función se ejecuta cuando le dan click al [botón]
 */
function imprimirValores() {
  if (age.value) {
    const ageNumber = parseInt(age.value)
    if (ageNumber >= 18) {
      showAlert('Felicidades eres mayor de edad')
    } else {
      showAlert('Prohibido eres menor de edad')
    }
  } else {
    showAlert('Debes escribir tu edad')
  }
}

/**
 * esta función muestra la [alerta]
 * @param {*} texto es el valor que muestra la [alerta]
 */
function showAlert(texto) {
  overlay.classList.add('open')
  setTimeout(() => {
    alerta.innerHTML = texto
    alerta.classList.add('open')
  }, 400)
}

/**
 * esta función cierra la [alerta]
 */
function closeAlert() {

  // 1. esconde la alerta 
  alerta.classList.remove('open')

  setTimeout(() => {
    // 2. cierra el overlay
    overlay.classList.remove('open')
    // 3. borramos el valor de age
    age.value = '';
  }, 400)
  
}
