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
    if(this.isSequencia()) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    const novoCpf = cpfParcial + digito1 + digito2;
 
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {//primeira parte dos cálculos
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;//para os cálculos, é necessário 10 digitos, e o arrays só tem 9
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;//torna a contagem regressiva de 10 a 2, pois subtrai um a cada repetição
        return ac;
    }, 0);
    const digito = 11 - (total % 11);//segunda parte do cálculo
    return digito > 9 ? '0' : String(digito);//expressão ternária, se maior que 0 retorna zero senão digito

}
ValidaCPF.prototype.isSequencia = function() {//só para não acontecer de alguém escrever uma sequência no parametro
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('070.987.720-03');
console.log(cpf.valida());