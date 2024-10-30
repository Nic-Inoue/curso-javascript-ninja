(function(win, doc){
    'use strict';

    function is(obj){
        return Object.prototype.toString.call(obj);
    };

    function isArray(obj){
        return is(obj) === '[object Array]';
    };

    function isFunction(obj){
        return is(obj) === '[object Function]';
    };

    function isObject(obj){
        return is(obj) === '[object Object]';
    };

    console.log(isFunction(function(){}));

})(window, document);