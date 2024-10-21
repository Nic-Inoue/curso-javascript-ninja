(function(win, doc){
    'use strict';

    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
    const display = doc.querySelector('input');
    const buttonsNum = doc.querySelectorAll('[data-js="buttonNum"]');
    const buttonsOps = doc.querySelectorAll('[data-js="buttonOp"]');
    const buttonClear = doc.querySelector('[data-js="buttonClear"]');
    const buttonEqual = doc.querySelector('[data-js="buttonEqual"]');
    const arrOps = ['+', 'x', '-', '÷'];
    display.value = '250-140x22÷22-79+81/3'

    for(let i = 0 ; i < buttonsNum.length ; i++){
        buttonsNum[i].addEventListener('click', function(){
            display.value += buttonsNum[i].innerHTML;
    }, false);
    };
    for(let i = 0 ; i < buttonsOps.length ; i++){
        buttonsOps[i].addEventListener('click', function(){
            if(arrOps.includes(display.value.match(/.$/)[0])){
                display.value = display.value.slice(0, (display.value.length - 1));
            };
            display.value += buttonsOps[i].innerHTML;
    }, false)
    };

    buttonClear.addEventListener('click', function(){
        display.value = 0
    }, false);

    buttonEqual.addEventListener('click', function(){
        if(arrOps.includes(display.value.match(/.$/)[0])){
            display.value = display.value.slice(0, (display.value.length - 1));
        };
        let numsDisplay = display.value.match(/\d+/g).map(function(item){
            return item = Number(item);
        });
        let opStrings = display.value.match(/\D+/g).map(function(item){
            if(item === '÷'){
                return '/';
            } else if(item === 'x'){
                return '*'; 
            };
            return item
        });

        let newNums = [numsDisplay[0]];
        let newOps = [];

        for(let i = 0 ; i < opStrings.length ; i++){
            let currentOp = opStrings[i];
            let currentNum = numsDisplay[i + 1];

            if(currentOp === '*'){
                newNums[newNums.length - 1] *= currentNum;
            } else if (currentOp === '/'){
                newNums[newNums.length - 1] /= currentNum;
            } else {
                newOps.push(currentOp);
                newNums.push(currentNum);
            };
        };
        let result = newNums[0];
        for(let i = 0 ; i < newOps.length ; i++){
            let currentOp = newOps[i];
            let currentNum = newNums[i + 1];

            if(currentOp === '+'){
                result += currentNum;
            } else if (currentOp === '-'){
                result -= currentNum;
            };
        };
        display.value = result;
    }, false)

})(window, document);
