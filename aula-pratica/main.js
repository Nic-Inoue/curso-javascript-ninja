(function(win, doc){
    'use strict';
    
    function myFunction(){
        var result = Array.prototype.reduce.call(arguments, function (previous, current, index){
            return previous + current;
        })
        return result;
    };
    console.log(myFunction(1, 2, 3, 4, 5, 6, 7));
})(window, document);
