(function(win, doc){
    'use strict';

    var counter = 0;
    var $button = doc.querySelector('[data-js="button"]');
    var temporazidor;
    function timer(){
        console.log('timer', counter++);
    };
    temporazidor = setInterval(timer, 1000);

    $button.addEventListener('click', function(){
        clearInterval(temporazidor);
    }, false)
})(window, document);
