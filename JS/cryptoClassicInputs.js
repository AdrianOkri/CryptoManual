function createCryptoInputs(text, name, inputs) {
    let textF = '';

    switch(name) {
        case 'Cesar': textF = cesar(text, inputs[0], 1); break;
    }

    return textF;
}

function destroyCryptoInputs(text, name, inputs) {
    let textF = '';

    switch(name) {
        case 'Cesar': textF = cesar(text, inputs[0], 0); break;
    }

    return textF;
}

// --------------------------------------------------------------------
// -------------------------- Cesar ------------------------------
// --------------------------------------------------------------------

function cesar(text, key, op) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const arrayText = text.split('');
    let result = '';

    arrayText.forEach((element) => {
        let c;
        if(op == 1) {
            c =  parseInt(abc.indexOf(element)) + parseInt(key);
        } else {
            c =  parseInt(abc.indexOf(element)) - parseInt(key);
        }
        let mod = c % abc.length;

        result += abc[mod];
    });

    return result;
}