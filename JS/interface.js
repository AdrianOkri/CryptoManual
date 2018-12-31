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

new Vue({
    el: '#interface',
    data: {
        title: 'Encryption',
        author: 'Noe TRAN - TEAM WASP',
        text: '',
        selected: '',
        inputs: [],
        valueInputs: [],
        methods: nameMethods,
        finalText: ''
    },
    methods: {
        createInputs: function() {
            let i = 0;

            nameMethods.forEach(element => {
                if(element.name == this.selected) {
                    this.inputs = globalInputs[i];
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

