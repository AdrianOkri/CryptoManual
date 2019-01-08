function createCryptoInputs(text, name, inputs) {
    let textF = '';

    switch (name) {
        case 'Cesar': textF = cesar(text, inputs[0], 1); break;
        case 'Vigenère': textF = vigenere(text, inputs[0].toUpperCase(), 1); break;
        case 'Escítala': textF = escitala(text, inputs[0], inputs[1]); break;
        case 'Playfair': textF = playfair(text, inputs[0]); break;
    }

    return textF;
}

function destroyCryptoInputs(text, name, inputs) {
    let textF = '';

    switch (name) {
        case 'Cesar': textF = cesar(text, inputs[0], 0); break;
        case 'Vigenère': textF = vigenere(text, inputs[0].toUpperCase(), 0); break;
        case 'Escítala': textF = deEscitala(text, inputs[0], inputs[1]); break;
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
                while(c < 0) c += abc.length;
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
                while(c < 0) c += abc.length;
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

// --------------------------------------------------------------------
// --------------------------  Escítala  ------------------------------
// --------------------------------------------------------------------

function escitala(text, rows, columns) {
    const escitalaVector = new Array(parseInt(rows));
    let area = rows * columns;
    let arrayText = text.split('');
    let textOut = '';


    while(arrayText.length % area != 0) {
        if(arrayText.length > area) { alert('Nop'); break; }
        arrayText.push('#');
    }
    for(let i = 0; i < parseInt(rows); i++) escitalaVector[i] = new Array(parseInt(columns));

    let letter = 0;

    for(let i = 0; i < parseInt(rows); i++)
        for(let j = 0; j < parseInt(columns); j++) {
            escitalaVector[i][j] = arrayText[letter];
            letter++;
        }
        
    for(let i = 0; i < parseInt(columns); i++)
        for(let j = 0; j < parseInt(rows); j++) {
            textOut += escitalaVector[j][i]
        }    
    
    return textOut;
}

function deEscitala(text, rows, columns) {
    let c = 0, size = text.length-1, pos = 0;
    let textOut = '';

    for(let i = 0; i <= size; i++) {
        if(c > size) {
            pos++;
            c = pos;
        } else {  
            textOut += text[c];
            c += parseInt(rows);
        }
        
    }
    return textOut;
}

// --------------------------------------------------------------------
// ---------------------------- Playfair ------------------------------
// --------------------------------------------------------------------
function killLetters(text) {
    let arrayText = text.toUpperCase().split('');
    const wordCustomVector = new Array(5);
    let wordCustom = '';

    for(let i = 0; i < 5; i++) wordCustomVector[i] = new Array(5);

    arrayText.forEach((element, index) => {
        if(element != '1')  for(let i = 0; i < arrayText.length; i++) 
                                if(element == arrayText[i] && i != index) arrayText[i] = '1';
    });
    arrayText.forEach((letter, index) => {
        if(letter != '1' && letter != ' ') wordCustom += letter;
    });

    letter = 0;

    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            if(wordCustom[letter] != 'I') wordCustomVector[i][j] = wordCustom[letter];
            else wordCustomVector[i][j] = 'I/J';
            letter++; 
        }
    }

    return wordCustomVector;
}

function playfair(text, key) {
    const abc = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    const wordCustom = killLetters(key + abc);


    

    return wordCustom;
}