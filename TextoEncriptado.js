let encriptacionArray = ['enter', 'imes', 'ai', 'ober', 'ufat'];

function cifrarTexto() {
    let inputTexto = document.getElementById('inputTexto').value.toLowerCase();
    let resultado = encriptar(inputTexto);
    document.getElementById('resultado').innerText = resultado;
    
    //nuevo codigo
    // Oculta el mensaje en el rectangulo si hay texto cifrado
    let mensaje = document.querySelector('#rectangulo .mensaje-rectangulo');
    mensaje.style.display = resultado ? 'none' : 'block';
    let mensajes = document.querySelector('#rectangulo .cartel-mensaje-rectangulo');
    mensajes.style.display = resultado ? 'none' : 'block';


}

function descifrarTexto() {
    let inputTexto = document.getElementById('inputTexto').value.toLowerCase();

    // Intenta descifrar directamente
    let resultado = descifrar(inputTexto);

    // Si no tiene exito, intenta descifrar el texto cifrado inverso
    if (resultado === inputTexto) {
        resultado = descifrarInverso(inputTexto);
    }

    document.getElementById('resultado').innerText = resultado;

    //nuevo codigo
    // Oculta el mensaje en el rectangulo si hay texto descifrado
    let mensaje = document.querySelector('#rectangulo .cartel-mensaje-rectangulo');
    mensaje.style.display = resultado ? 'none' : 'block';
    let mensajes = document.querySelector('#rectangulo .mensaje-rectangulo');
    mensajes.style.display = resultado ? 'none' : 'block';
}

function encriptar(texto) {
    for (let palabraEncriptada of encriptacionArray) {
        let letra = letraCorrespondiente(palabraEncriptada);
        let patronBusqueda = new RegExp(letra, 'g'); //crear un objeto para buscar y reemplazar coincidencias en un texto
        texto = texto.replace(patronBusqueda, palabraEncriptada);
    }
    return texto;
}

function descifrar(texto) {
    for (let palabraEncriptada of encriptacionArray) {
        let letra = letraCorrespondiente(palabraEncriptada);
        let patronBusqueda = new RegExp(palabraEncriptada, 'g'); //buscara todas las coincidencias
        texto = texto.replace(patronBusqueda, letra);
    }
    return texto;
}

function descifrarInverso(texto) {
    for (let palabraEncriptada of encriptacionArray.reverse()) {
        let letra = letraCorrespondiente(palabraEncriptada);
        let patronBusqueda = new RegExp(palabraEncriptada, 'g'); //buscara todas las coincidencias
        texto = texto.replace(patronBusqueda, letra);
    }
    // Restaura el orden original del array
    encriptacionArray.reverse();
    return texto;
}

function letraCorrespondiente(palabraEncriptada) {
    switch (palabraEncriptada) {
        case 'enter':
            return 'e';
        case 'imes':
            return 'i';
        case 'ai':
            return 'a';
        case 'ober':
            return 'o';
        case 'ufat':
            return 'u';
        default:
            return palabraEncriptada;
    }
}

//nuevo agregado
function limpiarTexto() {
    // Restablece el valor del inputText a vacio
    document.getElementById('inputTexto').value = '';
    document.getElementById('resultado').value = '';

    // Muestra los mensajes en rectangulo
    let mensaje = document.querySelector('#rectangulo .cartel-mensaje-rectangulo');
    mensaje.style.display = 'block';
    let mensajes = document.querySelector('#rectangulo .mensaje-rectangulo');
    mensajes.style.display = 'block';
}
