(function($, doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app(){
    return {
      init: function(){
        let inputImage = $('[data-js="inputImage"]');
        let inputModel = $('[data-js="inputModel"]');
        let inputPlate = $('[data-js="inputPlate"]');
        let inputColor = $('[data-js="inputColor"]');
        let inputYear = $('[data-js="inputYear"]');
        let buttonSubmit = $('button');
        
        buttonSubmit.on('click', function(event){
          event.preventDefault();
          let isInputImageValid = isInputValid(/\w+(?::\/\/)?\w+\.\w+(?:\.)?\w+.+?[jjp][ppn][geg][g]?$/g, inputImage);
          let isInputModelValid = isInputValid(/^\w+-\w+$/g, inputModel);
          let isInputPlateValid = isInputValid(/^[a-zA-Z]{3}-\d[\da-zA-Z]\d\d$/g, inputPlate);
          let isInputYearValid = isInputValid(/^[12][09]\d\d$/g, inputYear);
          let isInputColorValid = isInputValid(/^[A-Za-z]+$/g, inputColor);
          verifyInput(isInputImageValid, inputImage);
          verifyInput(isInputModelValid, inputModel);
          verifyInput(isInputPlateValid, inputPlate);
          verifyInput(isInputYearValid, inputYear);
          verifyInput(isInputColorValid, inputColor);
          if(isAllInputsValid(isInputImageValid, isInputModelValid, isInputPlateValid, isInputYearValid, isInputColorValid))
            appendCarInfoIntoList();
        });
      
        function appendCarInfoIntoList(){
          let newLiCarInfo = doc.createElement('li');
          let arrayInputCarInfo = [inputModel.get().value, inputPlate.get().value, inputYear.get().value, inputColor.get().value];
          let newImgCar = doc.createElement('img');
          appendAtributtesToImage(newImgCar, inputImage.get().value);
          newLiCarInfo.appendChild(newImgCar);
          for(var i = 0 ; i < 4 ; i++){
            let newTextCarInfo = doc.createTextNode(arrayInputCarInfo[i]);
            let newPCarInfo = doc.createElement('p');
            let carList = $('[data-js="carsList"]');
            newPCarInfo.appendChild(newTextCarInfo);
            newLiCarInfo.appendChild(newPCarInfo);
            carList.get().appendChild(newLiCarInfo);
          };
        };
      
        function appendAtributtesToImage(newImg, imgLink){
          newImg.src = imgLink;
          newImg.style.height = '100px';
          newImg.style.width = '200px';
        }
      
        function isAllInputsValid(isInput1, isInput2, isInput3, isInput4, isInput5){
          return isInput1 && isInput2 && isInput3 && isInput4 && isInput5;
        };
      
        function verifyInput(isInputValidBoolean, inputName){
          if(!isInputValidBoolean){
            let newDivError = doc.createElement('h3');
            let newContentError = doc.createTextNode('Insira um valor válido.');
            let form = $('[data-js="form"]');
            newDivError.appendChild(newContentError);
            form.get().insertBefore(newDivError, inputName.get());
          };
        };
      
        function isInputValid(regexCode, inputName){
          let getRegexCode = regexCode;
          if(inputName === inputYear){
            let yearNumber = +(inputName.get().value);
            if(getRegexCode.test(yearNumber))
              return yearNumber > 1950 && yearNumber < 2025;
          }
          return getRegexCode.test(inputName.get().value);
        };
      },

      companyInfo: function companyInfo(){
        let ajax = new XMLHttpRequest();
        ajax.open('GET', 'company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },

      getCompanyInfo: function getCompanyInfo(){
        if(!app().isReady.call(this))
          return;
        let data = JSON.parse(this.responseText);
        let companyName = $('[data-js="company-name"]');
        let companyPhone = $('[data-js="company-phone"]');
        companyName.get().textContent = data.name;
        companyPhone.get().textContent = data.phone;
      },

      isReady: function isReady(){
        return this.readyState === 4 && this.status === 200;
      }
    }
  }

  app().init();
  app().companyInfo();


})(window.DOM, document);
