const nameMethods = [
    { name: 'ROT13' }, { name: 'Atbash' }, { name: 'Escítala' },
    { name: 'Polybios' },{ name: 'Vigenère' }, { name: 'Playfair' },
    { name: 'Hill' }, { name: 'Vernam' }, { name: 'Repetition' },
    { name: 'Cesar' }
]
const globalInputs = 
    [
        [],[],[],[],[],[],[],[],[],
        [{title: 'Private Key', name: 'Key'}]
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
                this.finalText = createCryptoInputs(this.text, this.selected, this.valueInputs);
            } else {
                this.finalText = createCrypto(this.text, this.selected);
            }
        },
        decipher: function() {
            if(this.inputs.length != 0) {
                this.finalText = destroyCryptoInputs(this.text, this.selected, this.valueInputs);
            } else {
                this.finalText = destroyCrypto(this.text, this.selected);
            }
        }
    }
});