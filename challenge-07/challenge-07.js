/*
Crie um array com 5 items (tipos variados).
*/
var myArray = [5, null, 'Nicolas', ['a', 'b', 'c'], true];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(newItem){
    myArray.push(newItem);
    return myArray;
};

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem([NaN, false, 'x']));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + myArray[5][1] + '.')

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + myArray.length + ' itens.')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + myArray[5].length + ' itens.')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
function numeroPar(){
    var alcance = 10
    while(alcance <= 20){
        alcance % 2 === 0 ? console.log(alcance) : '';
        alcance++;
    };
};


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
function numeroImpar(){
    var alcance = 10;
    while(alcance <= 20){
        alcance % 2 === 1 ? console.log(alcance) : '';
        alcance++;
    };
};


/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
function numeroPar2(){
    for(var alcance = 100; alcance <= 120; alcance++){
        alcance % 2 === 0 ? console.log(alcance) : '';
    };
};

console.log( 'Números ímpares entre 111 e 125:' );
function numeroImpar2(){
    for(var alcance = 111; alcance <= 125; alcance++){
        alcance % 2 === 1 ? console.log(alcance) : '';
    };
};