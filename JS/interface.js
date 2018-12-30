const nameMethods = [
    { name: 'Cesar' },
    { name: 'Polybios' },
    { name: 'Repetition' },
    { name: 'Rino' },
    { name: 'Ivus' }
]
const globalInputs = 
    [
        [{title: 'Private Key', name: 'PrivateKey', index: 0}],
        [],[],[],
        [{title: 'Number key', name: 'Number key', index: 0}, {title: 'Numerical Base', name: 'NumericalBase', index: 1}, {title: 'Public key', name: 'PublicKey', index: 2}]
    ]

new Vue({
    el: '#interface',
    data: {
        title: 'Encryption',
        author: 'Neo TRAN - Team Wasp',
        text: [],
        selected: '',
        inputs: [],
        methods: nameMethods
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
                alert(this.text)
            } else {
                alert('Vacio')
            }
        }
    }
});