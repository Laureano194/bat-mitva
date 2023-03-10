form = document.querySelector('form')
form.addEventListener('submit', e => {
    e.preventDefault()
    const data = Object.fromEntries(
        new FormData(e.target)
        )
        textWhatsapp(data)
        form.reset()
        })

const textWhatsapp = data => {
    let URL = [];
    let phone = "2914071620"
    let urlWhatsapp = `https://api.whatsapp.com/send?phone=${phone}&text=`
    let stringNombre = `%2ANombre:%2A ${data.nombre}.`
    stringNombre = stringNombre.split(' ')
    stringNombre = stringNombre.join('%20')
    let stringCantidad = `%2A¿Cuantos son%3F%2A ${data.cantidad}`
    stringCantidad = stringCantidad.split(' ')
    stringCantidad = stringCantidad.join('%20')
    let asistePlural = "Obvio que vamos!"
    let noAsistePlural = "Nos lo perdemos :("
    let asisteSingular = "Obvio que voy!"
    let noAsisteSingular = "Me lo pierdo :("
    let stringDni = `%2ADNI:%2A ${data.dni}.`
    let stringAsiste = "%2A¿Vas%3F%2A "
    let stringAsisteRespuesta = data.cantidad > 1 
    ? (data.asiste == "Si" ? asistePlural : noAsistePlural) 
    : (data.asiste == "Si" ? asisteSingular : noAsisteSingular)
    stringAsiste = stringAsiste + stringAsisteRespuesta
    stringAsiste = stringAsiste.split(' ')
    stringAsiste = stringAsiste.join('%20')
    
    URL = [urlWhatsapp, stringNombre, stringCantidad, stringAsiste, stringDni]
    
    if(data.menu) {
        let stringMenu = `%2AMenu:%2A ${data.menu}.`
        stringMenu = stringMenu.split(' ')
        stringMenu = stringMenu.join('%20')
        URL.push(stringMenu)
    }
    urlWhatsapp = URL.join("%0A")
    window.open(urlWhatsapp)
}

