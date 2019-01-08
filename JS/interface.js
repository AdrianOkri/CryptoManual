const nameMethods = [
    {name: 'A1Z26'} ,{ name: 'ROT13' }, { name: 'Atbash' }, { name: 'Escítala' },
    { name: 'Polybios' }, { name: 'Repetition' }, { name: 'Vigenère' },
    { name: 'Cesar' }, { name: 'NumberBase' }, {name: 'Reverse'}
]
const globalInputs = 
    [
        [],[],[],[{title: 'Rows'}, {title: 'Columns'}],
        [],[], [{title: 'Word Key'}], [{title: 'Key'}], [{title: 'Numerical base'}], []
    ]

const urlMethods = [
    { url: '' },
    { url: 'https://darkbyteblog.wordpress.com/2011/06/15/criptografia-rot13/' },
    { url: 'http://www.ugr.es/~anillos/textos/pdf/2010/EXPO-1.Criptografia/02a01.htm' },
    { url: 'https://es.wikipedia.org/wiki/Esc%C3%ADtala' },
    { url: 'https://unamcriptografia.wordpress.com/category/tecnicas-clasicas-de-cifrado/sustitucion/monoalfabetica/monogramica/polybios/' },
    { url: 'https://unamcriptografia.wordpress.com/category/vigenere/' },
    { url: '' },
    { url: 'https://unamcriptografia.wordpress.com/category/tecnicas-clasicas-de-cifrado/sustitucion/monoalfabetica/monogramica/cesar/' },
    { url: 'https://es.wikipedia.org/wiki/Base_(aritm%C3%A9tica)' },
    { url: '' },
]

new Vue({
    el: '#interface',
    data: {
        title: 'Encryption',
        author: 'TEAM WASP',
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