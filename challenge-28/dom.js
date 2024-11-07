(function(doc, win){
    'use strict';

    function DOM(nodeDOM){
        this.element = doc.querySelectorAll(nodeDOM);
    };
    
    function is(obj){
        return Object.prototype.toString.call(obj);
    };
    
    DOM.prototype.on = function addEvents(event, callback){
      this.element.forEach(function(item){
        item.addEventListener(event, callback, false);
      });
    };;
    
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
    
    win.DOM = DOM;
})(document, window);