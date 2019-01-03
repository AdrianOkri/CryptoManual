function createCryptoInputs(text, name, inputs) {
    let textF = '';

    switch (name) {
        case 'Cesar': textF = cesar(text, inputs[0], 1); break;
        case 'Vigenère': textF = vigenere(text, inputs[0].toUpperCase(), 1); break;
    }

    return textF;
}

function destroyCryptoInputs(text, name, inputs) {
    let textF = '';

    switch (name) {
        case 'Cesar': textF = cesar(text, inputs[0], 0); break;
        case 'Vigenère': textF = vigenere(text, inputs[0].toUpperCase(), 0); break;
    }

    return textF;
}

// --------------------------------------------------------------------
// ---------------------------- Cesar --------------------------------
// --------------------------------------------------------------------

function cesar(text, key, op) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const arrayText = text.toUpperCase().split('');
    let result = '';

    arrayText.forEach((element) => {
        if (element != ' ') {
            let c;
            if (op == 1) {
                c = parseInt(abc.indexOf(element)) + parseInt(key);
            } else {
                c = parseInt(abc.indexOf(element)) - parseInt(key);
            }
            let mod = c % abc.length;

            result += abc[mod];
        } else {
            result += ' ';
        }
    });

    return result;
}

// --------------------------------------------------------------------
// --------------------------  Vigenère  ------------------------------
// --------------------------------------------------------------------

function vigenere(text, key, op) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const arrayText = text.toUpperCase().split('');
    let result = '';
    let n = 0;

    arrayText.forEach((element) => {
        if (element != ' ') {
            let c;
            if (op == 1) {
                c = parseInt(abc.indexOf(element)) + parseInt(abc.indexOf(key[n % key.length]));
                
            } else {
                c = parseInt(abc.indexOf(element)) - parseInt(abc.indexOf(key[n % key.length]));
                console.log(c);
            }
            let mod = c % abc.length;

            result += abc[mod];
            n++;
        } else {
            result += ' ';
        }
    });

    return result;
}