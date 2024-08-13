// Definición de categorías de emojis
const emojiCategories = {
    animals: ['🐶', '🐱', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷'],
    food: ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🥑', '🍅', '🍔', '🍕'],
    sports: ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸'],
    faces: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉'],
};

// Función para encriptar el mensaje
function encryptMessage() {
    // Obtener el texto de entrada y la categoría seleccionada
    const inputText = document.getElementById('inputText').value;
    const category = document.getElementById('emojiCategory').value;

    // Obtener los emojis correspondientes a la categoría
    const emojis = emojiCategories[category];

    // Convertir el texto de entrada a emojis y mostrarlo en el campo de salida
    const outputText = textToEmoji(inputText, emojis);
    document.getElementById('outputText').value = outputText;
}

// Función para desencriptar el mensaje
function decryptMessage() {
    // Obtener el texto de entrada y la categoría seleccionada
    const inputText = document.getElementById('inputText').value;
    const category = document.getElementById('emojiCategory').value;
}