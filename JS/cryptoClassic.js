function createCrypto(text, name) {
    let textF = '';

    switch(name) {
        case 'Atbash': textF = atbash(text); break;
        case 'ROT13': textF = rot13(text); break;
    }

    return textF;
}

function destroyCrypto(text, name) {
    let textF = '';

    switch(name) {
        case 'Atbash': textF = atbash(text); break;
        case 'ROT13': textF = rot13(text); break;
    }

    return textF;
}

// --------------------------------------------------------------------
// -------------------------- ROT13 -----------------------------------
// --------------------------------------------------------------------
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
    })
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