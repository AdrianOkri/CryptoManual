const nameMethods = [
    { name: 'ROT13' }, { name: 'Atbash' }, { name: 'Escítala' },
    { name: 'Polybios' },{ name: 'Vigenère' }, { name: 'Playfair' },
    { name: 'Hill' }, { name: 'Vernam' }, { name: 'Repetition' },
    { name: 'Cesar' }
]
const globalInputs = 
    [
        [],[],[],[],[],[],[],[],[],
        [{title: 'Private Key', name: 'PrivateKey'}]
    ]

const urlMethods = [
    { url: 'https://r3gularweb.blogspot.com/2018/11/1-introduccion-la-criptografia-con.html' }, { url: 'https://r3gularweb.blogspot.com/2018/12/3-criptografia-cifrado-por-sustitucion.html' },
    { url: '' }, { url: 'https://r3gularweb.blogspot.com/2018/11/2-en-construccion-criptografia-de.html' }, { url: '' }, { url: '' }, { url: '' }, { url: '' }, { url: '' }, { url: '' },
]

new Vue({
    el: '#interface',
    data: {
        title: 'Encryption',
        author: 'Adrián - TEAM WASP',
        text: '',
        selected: '',
        inputs: [],
        valueInputs: [],
        methods: nameMethods,
        url: '',
        finalText: ''
    },
    methods: {
        createInputs: function() {
            let i = 0;

            nameMethods.forEach(element => {
                if(element.name == this.selected) {
                    this.inputs = globalInputs[i];
                    this.url = urlMethods[i].url;
                }
                i++;
            });
        },
        crypto: function() {
            if(this.inputs.length != 0) {
                console.log(`${this.text}`);
                for(let i = 0; i < this.inputs.length; i++) {
                    console.log(`${this.valueInputs[i]}`);
                }
            } else {
                this.finalText = create(this.text, this.selected);
            }
        },
        decipher: function() {
            if(this.inputs.length != 0) {
                console.log(`${this.text}`);
                for(let i = 0; i < this.inputs.length; i++) {
                    console.log(`${this.valueInputs[i]}`);
                }
            } else {
                this.finalText = destroy(this.text, this.selected);
            }
        }
    }
});

function create(text, name) {
    return createCrypto(text, name);
}

function destroy(text, name) {
    return destroyCrypto(text, name);
}

