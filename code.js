const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const tarjeta1 = document.querySelector(".num1");

function validarMensaje () {
    let erroresPrevios = tarjeta1.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        tarjeta1.removeChild(err);
    }
    let mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje){
        if (!letrasValidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = "Solo letras minúscumas y sin acentos";
            mensajeError.appendChild(p);
        }

    }
    tarjeta1.appendChild(mensajeError);
    if (mensajeError.children.length === 0) {
        return true;
    }
    return false;
}

function encriptar(){
    if (!validarMensaje()) return;
    let mensaje = inputMensaje.value;
    let mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

    inputResultado.value = mensajeEncriptado;
}

function desencriptar(){
    if (!validarMensaje()) return;
    let mensajeEncriptado  = inputMensaje.value;
    let mensaje  = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

    inputResultado.value = mensaje;
}

function copiar (){
    let mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}


btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;

