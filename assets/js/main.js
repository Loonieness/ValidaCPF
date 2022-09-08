function ValidaCPF(cpfEnviado){

    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');//essa expressão representa caracteres especiais
        }
    });
}

ValidaCPF.prototype.valida = function() {//criando dentro do prototype a função
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    
    return true;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    console.log(cpfArray);
}
const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());