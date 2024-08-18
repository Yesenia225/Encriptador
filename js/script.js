const emojiCategories = {
    'animals': ['🐶', '🐱', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐵', '🐸', '🐔', '🐧', '🐦', '🐤', '🐢', '🐍', '🐳', '🐙', '🦑', '🐝', '🐞', '🦋', '🦓', '🐘', '🦒'],
    'food': ['🍎', '🍌', '🍇', '🍉', '🍒', '🍓', '🥑', '🍅', '🍔', '🍕', '🌭', '🍟', '🍦', '🍰', '🍩', '🍪', '🍫', '🍭', '🍯', '☕️', '🍵', '🍻', '🍷', '🥂', '🥨', '🍣', '🥗'],
    'sports': ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🏑', '⛳️', '🥊', '🥋', '⛸', '🎿', '🏂', '🚴', '🏊', '🤽‍♂️', '🚣‍♀️', '🏌️‍♂️', '🎽', '🥇', '🏆', '🎯'],
    'faces': ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😇', '😉', '😊', '😋', '😍', '😘', '🥰', '😎', '🤩', '😏', '😒', '😔', '😕', '🙃', '🤑', '😲', '🤗', '🤓', '😛']
};

//function encryptMessage() {
//    const inputText = document.getElementById('inputText').value;
//    const category = document.getElementById('emojiCategory').value;
//    const emojis = emojiCategories[category];
//    const outputText = textToEmoji(inputText, emojis);
//    document.getElementById('outputText').value = outputText;
//}

//function decryptMessage() {
//    const inputText = document.getElementById('inputText').value;
//    const category = document.getElementById('emojiCategory').value;
//    const emojis = emojiCategories[category];
//    const outputText = emojiToText(inputText, emojis);
//    document.getElementById('outputText').value = outputText;
//}

//function textToEmoji(str, emojis) {
//    return str.split('').map(char => {
//        const index = char.charCodeAt() % emojis.length;
//        return emojis[index];
//    }).join('');
//}

//function emojiToText(str, emojis) {
//    return str.split('').map(emoji => {
//        const index = emojis.indexOf(emoji);
//        return index !== -1 ? String.fromCharCode(index + 65) : emoji;
//    }).join('');
//}


function encryptMessage() {
    const inputText = document.getElementById('inputText').value.trim().toLowerCase();
    const category = document.getElementById('emojiCategory').value;
    const emojis = emojiCategories[category];
    const outputText = textToEmoji(inputText, emojis);
    document.getElementById('parrafo').innerText = outputText;
    document.getElementById('titulo-mensaje').innerText = 'Mensaje Encriptado';
}


function decryptMessage() {
    const inputText = document.getElementById('inputText').value.trim();
    const category = document.getElementById('emojiCategory').value;
    const emojis = emojiCategories[category];
    const outputText = emojiToText(inputText, emojis);
    document.getElementById('parrafo').innerText = outputText;
    document.getElementById('titulo-mensaje').innerText = 'Mensaje Desencriptado';
}


function textToEmoji(str, emojis) {
    return str.split('').map(char => {
        const index = char.charCodeAt() % emojis.length;
        return emojis[index];
    }).join('');
}


function emojiToText(str, emojis) {
    return str.split('').map(emoji => {
        const index = emojis.indexOf(emoji);
        return index !== -1 ? String.fromCharCode(index + 65) : emoji;
    }).join('');
}