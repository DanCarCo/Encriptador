// Función para limpiar el texto: convertir a minúsculas y eliminar caracteres especiales
function limpiarTexto(texto) {
    const textoLimpio = texto
        .normalize("NFD") // Normaliza el texto
        .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos
        .toLowerCase() // Convierte a minúsculas
        .replace(/[^a-z\s]/g, ''); // Eliminar caracteres no permitidos
    return textoLimpio;
}

// Función para encriptar (primera capa)
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Función para desencriptar (primera capa)
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Función para copiar al portapapeles
function copiarTexto(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado");
    });
}

// Evento de encriptar
document.getElementById("encriptar").addEventListener("click", () => {
    const mensaje = document.getElementById("mensaje").value.trim();
    const textoLimpio = limpiarTexto(mensaje);

    // Mensaje de advertencia
    if (mensaje !== textoLimpio) {
        alert("Solo letras minúsculas, sin acentos y sin caracteres especiales");
    }
    
    const resultado = encriptarTexto(textoLimpio);
    document.getElementById("resultado").value = resultado;
});

// Evento de desencriptar
document.getElementById("desencriptar").addEventListener("click", () => {
    const mensaje = document.getElementById("mensaje").value.trim();
    const textoLimpio = limpiarTexto(mensaje);

    // Mensaje de advertencia
    if (mensaje !== textoLimpio) {
        alert("Solo letras minúsculas, sin acentos y sin caracteres especiales");
    }

    const resultado = desencriptarTexto(textoLimpio);
    document.getElementById("resultado").value = resultado;
});

// Evento de copiar
document.getElementById("copiar").addEventListener("click", () => {
    const resultado = document.getElementById("resultado").value;
    copiarTexto(resultado);
    document.getElementById("resultado").value = ""; // Borrar resultado después de copiar
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('year').textContent = new Date().getFullYear();
});
