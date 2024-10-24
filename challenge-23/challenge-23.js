(function(doc){
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

    // function isCharZero(char){
    //     return char === '0';
    // };
    // function removeZero(){
    //     if(isCharZero(display.value[0])){
    //         display.value = '';
    //     };
    // };
    
    function isLastCharOp(){
        const arrOps = ['+', 'x', '-', '÷'];
        return arrOps.includes(display.value.match(/.$/)[0])
    };
    function removeLastCharIfOp(){
        if(isLastCharOp){
            display.value = display.value.slice(0, -1);
        };
    };

    function clickButtonDisplay(buttonsType){
        for(let i = 0 ; i < buttonsType.length ; i++){
            buttonsType[i].addEventListener('click', function(){
                if(buttonsType === buttonsOps)
                    removeLastCharIfOp();
                display.value += buttonsType[i].innerHTML;
            }, false)
        };
    };

    function clearDisplay(){
        display.value = 0;
    };

    function multiplyDivideArrays(arrayNumbers, arrayOperators, resultArrayNumbers, resultArrayOperators){
        for(let i = 0 ; i < arrayOperators.length ; i++){
            let currentOp = arrayOperators[i];
            let currentNum = arrayNumbers[i + 1];

            if(currentOp === 'x'){
                resultArrayNumbers[resultArrayNumbers.length - 1] *= currentNum;
            } else if (currentOp === '÷'){
                resultArrayNumbers[resultArrayNumbers.length - 1] /= currentNum;
            } else {
                resultArrayOperators.push(currentOp);
                resultArrayNumbers.push(currentNum);
            };
        };
    };

    function sumSubtractArrays(numberItem, resultArrayNumbers, resultArrayOperators){
        for(let i = 0 ; i < resultArrayOperators.length ; i++){
            let currentOp = resultArrayOperators[i];
            let currentNum = resultArrayNumbers[i + 1];

            if(currentOp === '+'){
                numberItem += currentNum;
            } else if (currentOp === '-'){
                numberItem -= currentNum;
            };
        };
        return numberItem;
    };

    function calculate(){
        removeLastCharIfOp();
        let arrNumsDisplay = display.value.match(/\d+/g).map(function(item){
            return item = Number(item);
        });
        let arrOpsDisplay = display.value.match(/\D+/g);
        let newNums = [arrNumsDisplay[0]];
        let newOps = [];

        multiplyDivideArrays(arrNumsDisplay, arrOpsDisplay, newNums, newOps);
        let result = newNums[0];
        result = sumSubtractArrays(result, newNums, newOps);
        display.value = result;
    };

    clickButtonDisplay(buttonsNum);
    clickButtonDisplay(buttonsOps);
    buttonClear.addEventListener('click', clearDisplay, false);
    buttonEqual.addEventListener('click', calculate, false);

})(document);
