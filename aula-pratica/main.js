(function(win, doc){
    'use strict';

    var $main = doc.querySelector('.main');
    console.log($main.setAttribute('data-js2', 'main-datajs'));
})(window, document);
