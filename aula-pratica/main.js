(function(win, doc){
    'use strict';

    var button = doc.querySelector('#button');
    var inputUsername = doc.querySelector('#username');
    var inputPassword = doc.querySelector('#password');

    button.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Click no botão!');
    }, false);

    doc.addEventListener('click', function(){
        alert('MEU DEUS VOCÊ CLICOU NO SITE!');
    }, false)
})(window, document);
