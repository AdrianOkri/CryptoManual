const nameMethods = [
    { name: 'Cesar' },
    { name: 'Polybios' },
    { name: 'Repetition' },
    { name: 'Rino' },
    { name: 'Ivus' }, { name: 'Atbash' }
]
const globalInputs = 
    [
        [{title: 'Private Key', name: 'PrivateKey'}],
        [],[],[],
        [{title: 'Number key', name: 'Number key'}, {title: 'Numerical Base', name: 'NumericalBase'}, {title: 'Public key', name: 'PublicKey'}],
        []
    ]

new Vue({
    el: '#interface',
    data: {
        title: 'Encryption',
        author: 'Neo TRAN - Team Wasp',
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
            }
        }
    }
});

