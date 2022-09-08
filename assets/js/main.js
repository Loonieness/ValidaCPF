const elementos = [
    {tag: 'p', texto: 'Qualquer texto.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
]

//seleciona apenas um elemento, a primeira classe com esse nome, que é onde estamos mexendo
const container = document.querySelector('.container');

//cria a const que será a div que será criada para por os elementos
const div = document.createElement('div');

//cria variavel de controle dentro do FOR, que será menor que o tamanho do nosso array
for(let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);//trás o elemento pelo endereço int
}