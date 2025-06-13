// cleanText.js

function limpiarTextos(texto) {
    // Eliminar acentos
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n' };
    texto = texto.split('').map(char => acentos[char] || char).join('');

    // Eliminar signos de puntuación y espacios en blanco
    texto = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    texto = texto.replace(/\s+/g, ' ').trim();

    return texto.toLowerCase(); // Convertir a minúsculas
}