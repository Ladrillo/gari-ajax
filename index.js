// pillando el botoncito del DOM.
const botoncito = document.querySelector('#botonNumerito')

botoncito.addEventListener('click', () => {
  // si el usuario clicka el boton esto pasa...

  // como sea que se genere la contraseña.
  // aqui usaremos sin mas un numero random.
  const numerito = Math.floor(Math.random() * 10000)
  console.log(`El numerito generado es: ${numerito}`)

  // aqui viene el ajax. 
  // si el navegador es antiguo o Explorer
  // es posible que fetch no funcione.
  fetch('http://localhost:4000/api', {
    // las opciones necesarias pueden variar, mirate esta pagina:
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    method: 'POST',
    body: JSON.stringify({ password: numerito }), // lo que el PHP necesite, aqui mandamos un objeto con una password
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(respuesta => {
      return respuesta.json()
    })
    .then(respuestaParseada => {
      // el servidor PHP respondera
      // con lo que responda, aqui el node
      // nos envia un objecto con un 'message' dentro
      console.log(`
        El servidor respondio con este mensaje: 
        ${respuestaParseada.message}
      `)
    })
    .catch(errorcillo => {
      debugger
    })
})
