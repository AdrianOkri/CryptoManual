function createCrypto(text, name) {
    let textF = '';

    switch(name) {
        case 'A1Z26': textF = a1z26(text); break;
        case 'Atbash': textF = atbash(text); break;
        case 'ROT13': textF = rot13(text); break;
        case 'Polybios': textF = polybios(text); break;
        case 'Repetition': textF = repetition(text); break;
        case 'Cesar': textF = cesar(); break;
    }

    return textF;
}

function destroyCrypto(text, name) {
    let textF = '';

    switch(name) {
        case 'A1Z26': textF = deA1z26(text); break;
        case 'Atbash': textF = atbash(text); break;
        case 'ROT13': textF = rot13(text); break;
        case 'Polybios': textF = dePolybios(text); break;
        case 'Repetition': textF = deRepetition(text); break;
    }

    return textF;
}
// --------------------------------------------------------------------
// -------------------------- A1Z26 -----------------------------------
// --------------------------------------------------------------------
function a1z26(text) {
    const arrayText = text.split('');
    let result = '';

    arrayText.forEach(element => {
        result += (parseInt(element.charCodeAt(0)) - 64) + "-";
    });

    return result.slice(0,-1);
}

function deA1z26(text) {
    const arrayText = text.split('-');
    let result = '';

    arrayText.forEach(element => {
        result += String.fromCharCode(((parseInt(element) + 64))); 
    });

    return result;
}

// --------------------------------------------------------------------
// -------------------------- ROT13 -----------------------------------
// ------------------   --------------------------------------------------
function rot13(text) {
    let abecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    const arrayAbc = abecedario.split('');
    const arraytextUpper = text.toUpperCase().split('');

    arraytextUpper.forEach(element => {
        let i = arrayAbc.indexOf(element);
        if(element == " ") {
            result += " ";
        }else if(i > 12) {
            result += arrayAbc[i-13];
        } else {
            result += arrayAbc[i+13];
        }
    });

    return result;
}
// --------------------------------------------------------------------
// -------------------------- Atbash -----------------------------------
// --------------------------------------------------------------------

function atbash(text) {
    let n, x;
    let textAtbash = [];
    let arrayText = text.toUpperCase().split('');

    arrayText.forEach(element => {
        n = parseInt(element.charCodeAt());
        x = ((65 - n) + 26) + 64;

        textAtbash.push(String.fromCharCode(x));
    });
    arrayText = "";
    textAtbash.forEach(element => {
        if(element == "{" || element == " ") {
            arrayText += " ";
        } else {
            arrayText += element;
        }
    })

    return arrayText;
}
// --------------------------------------------------------------------
// -------------------------- Polklybios ------------------------------
// --------------------------------------------------------------------

const POLYBIOS = [
	["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
	["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"],
	["u", "v", "w", "x", "y", "z", "A", "B", "C", "D"],
	["E", "F", "G", "H", "I", "J", "K", "L", "M", "N"],
	["O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"],
	["Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "á", "é", "í", "ó", "ú", "?", "¿", ":"],
    [" ", ",", ".", "(", ")", "@", "ñ", "Ñ", "!", "="]
];

function polybios(text) {
    const arrayText = text.split('');
    let textPolybios = '';
    arrayText.forEach(element => {
        for(let x = 0; x < 8; x++) {
            for(let y = 0; y < 10; y++) {
                if(element == POLYBIOS[x][y]) {
                    
                    textPolybios += String.fromCharCode((x + 65), (y + 65)) ;
                }
            }
        }
    });
    return textPolybios;
}

function dePolybios(text) {
    const arrayText = text.split('');
    let textPolybios = '';

    for(let i = 0; i < arrayText.length; i += 2) {
        let x = arrayText[i].charCodeAt();
        let y = arrayText[i+1].charCodeAt();
        textPolybios += POLYBIOS[x-65][y-65];
    }

    return textPolybios;
}

// --------------------------------------------------------------------
// -------------------------- Repetition ------------------------------
// --------------------------------------------------------------------

function repetition(text) {
    const arrayText = text.split('');
    let auxLetter, total = 0, index = "", result = "";
    
    for(let j = 0; j < arrayText.length; j++) {
        auxLetter = arrayText[j];

        if(auxLetter != '1') {
            for(let i = 0; i < arrayText.length; i++) {
                if(auxLetter == arrayText[i]) {
                    arrayText[i] = '1';
                    index += i + "$"; total++;    
                } 
            }
        } else {
            continue;
        }

        result += auxLetter + '%' + total + "@" + index + '^';
        index = ""; total = 0;
    };

    return text.length + "(°-°)" + result;
}

function deRepetition(text) {
    let sizeArray = text.split('(°-°)');
    const arrayText = new Array(parseInt(sizeArray[0], 10));
    const tokenLetter = sizeArray[1].split("^");

    console.log(tokenLetter);

    for(let i = 0; i < tokenLetter.length-1; i++) {
        let letter = tokenLetter[i].split('%');
        let repetition = letter[1].split('@');
        let position = repetition[1].split('$');

        for(let j = 0; j < parseInt(repetition[0]); j++) {
            let index = parseInt(position[j]);


            arrayText[index] = letter[0];
        }
    }

    let result = '';
    arrayText.forEach(element => {
        result += element;
    });

    return result;
}