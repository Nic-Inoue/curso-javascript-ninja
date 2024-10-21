(function(win, doc){
    'use strict';
    
    function sum() {
        debugger;
        return Array.prototype.reduce.call(arguments, function (previous, current){
           return previous + current; 
        });
    };
    console.log(sum(1, 21, 338, 4));
    console.log(console);
})(window, document);
 