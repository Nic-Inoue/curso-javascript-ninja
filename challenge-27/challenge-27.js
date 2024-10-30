(function(doc){
    'use strict';

    /*
    Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
    métodos semelhantes aos que existem no array, mas que sirvam para os
    elementos do DOM selecionados.
    Crie os seguintes métodos:
    - forEach, map, filter, reduce, reduceRight, every e some.

    Crie também métodos que verificam o tipo do objeto passado por parâmetro.
    Esses métodos não precisam depender de criar um novo elmento do DOM, podem
    ser métodos estáticos.

    Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
    no objeto, como nos exemplos abaixo:
    DOM.isArray([1, 2, 3]); // true
    DOM.isFunction(function() {}); // true
    DOM.isNumber('numero'); // false

    Crie os seguintes métodos para verificação de tipo:
    - isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
    O método isNull deve retornar `true` se o valor for null ou undefined.
    */
    function DOM(nodeDOM){
        this.element = doc.querySelectorAll(nodeDOM);
    };

    function is(obj){
        return Object.prototype.toString.call(obj);
    };
    
    DOM.prototype.on = addEvents;
    DOM.prototype.off = removeEvents;
    DOM.prototype.get = getDomElements;
    DOM.prototype.forEach = forEach;
    DOM.prototype.map = map;
    DOM.prototype.filter = filter;
    DOM.prototype.reduce = reduce;
    DOM.prototype.reduceRight = reduceRight;
    DOM.prototype.every = every;
    DOM.prototype.some = some;
    DOM.prototype.isArray = isArray;
    DOM.prototype.isObject = isObject;
    DOM.prototype.isNumber = isNumber;
    DOM.prototype.isFunction = isFunction;
    DOM.prototype.isBoolean = isBoolean;
    DOM.prototype.isString = isString;
    DOM.prototype.isNull = isNull;

    
    function addEvents(event, callback){
        this.element.forEach(function(item){
          item.addEventListener(event, callback, false);
        });
    };
    
    function removeEvents(event, callback){
        this.element.forEach(function(item){
          item.removeEventListener(event, callback, false);
        });
    };
    
    function getDomElements(){
        return this.element;
    };

    function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments)
    };

    function map(){
        return Array.prototype.map.apply(this.element, arguments)
    };

    function filter(){
        return Array.prototype.filter.apply(this.element, arguments)
    };

    function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments)
    };

    function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments)
    };

    function every(){
        return Array.prototype.every.apply(this.element, arguments)
    };

    function some(){
        return Array.prototype.some.apply(this.element, arguments)
    };
    
    function isArray(obj){
        return is(obj) === '[object Array]';
    };

    function isObject(obj){
        return is(obj) === '[object Object]';
    };

    function isNumber(obj){
        return is(obj) === '[object Number]';
    };

    function isFunction(obj){
        return is(obj) === '[object Function]';
    };

    function isBoolean(obj){
        return is(obj) === '[object Boolean]';
    };

    function isString(obj){
        return is(obj) === '[object String]';
    };

    function isNull(obj){
        return is(obj) === '[object Undefined]' || is(obj) === '[object Null]';
    };
    
    console.log(DOM.prototype.isFunction());

})(document);
