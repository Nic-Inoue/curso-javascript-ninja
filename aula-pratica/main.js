(function(){
    'use strict';
    var nic = new String('Nicolas');
    var nic2 = new String('NICOLAS');
    var newNic = nic.charAt(0).toLowerCase() + nic.slice(1);

    console.log(newNic);
})(); 
