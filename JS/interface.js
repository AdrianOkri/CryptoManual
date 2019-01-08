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
    { url: '' },{ url: '' },{ url: '' },{ url: '' },{ url: '' },{ url: '' },{ url: '' },
    { url: '' },{ url: '' },{ url: '' },
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