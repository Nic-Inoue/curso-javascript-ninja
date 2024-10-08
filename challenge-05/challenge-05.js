/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myVar = [3, 4, 5, 2, 7];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnVar(array){
    return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
returnVar(myVar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayNumber(arrayValores, numero){
    return arrayValores[numero];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var numbersArray = [true, 2, null, Nan, 'Nicolas'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
arrayNumber(numbersArray, 0);
arrayNumber(numbersArray, 1);
arrayNumber(numbersArray, 2);
arrayNumber(numbersArray, 3);
arrayNumber(numbersArray, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro = undefined){
    var livros = {
        'Conjurador': {
            quantidadePaginas: 200,
            autor: 'Taran Matharu',
            editora: 'Galera'
        },
        'Ajin': {
            quantidadePaginas: 80,
            autor: 'Gamon Sakurai',
            editora: 'Rocco'
        },
        'Tokyo Ghoul': {
            quantidadePaginas: 60,
            autor: 'Sui Ishida',
            editora: 'Saraiva'
        }
    }; 

    return !nomeLivro ? livros: livros[nomeLivro];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookTitle = 'Ajin';
"O livro " + bookTitle + " tem " + book(bookTitle).quantidadePaginas + ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookTitle2 = 'Tokyo Ghoul';
'O autor do livro' + bookTitle2 + ' é ' + book(bookTitle2).autor + '.';

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookTitle3 = 'Conjurador';
"O livro " + bookTitle3 + ' foi publicado pela editora ' + book(bookTitle3).editora + '.';
