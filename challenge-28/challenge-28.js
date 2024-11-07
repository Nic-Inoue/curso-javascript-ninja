(function (DOM) {
    'use strict';

    function app() {
        let formCep = new DOM('[data-js="form-cep"]');
        let inputCep = new DOM('[data-js="cepInput"]');
        let logradouro = new DOM('[data-js="logradouro"]');
        let bairro = new DOM('[data-js="bairro"]');
        let estado = new DOM('[data-js="estado"]');
        let cidade = new DOM('[data-js="cidade"]');
        let cep = new DOM('[data-js="cep"]');
        let status = new DOM('[data-js="status"]');
        let ajax = new XMLHttpRequest();
        formCep.on('submit', handleSubmitFormCep);

        function handleSubmitFormCep(event) {
            event.preventDefault();
            var url = getUrl();
            ajax.open('GET', url);
            ajax.send();
            getMessage('loading');
            ajax.addEventListener('readystatechange', handleReadyStateChange);
        };

        function getUrl() {
            return replaceCEP('https://cep.correiocontrol,com.br/[CEP].json');
        }

        function clearCep() {
            return inputCep.get[0].value.replace(/\D/g, '');
        }

        function handleReadyStateChange() {
            if (isRequestOk()) {
                getMessage('ok');
                fillCEPFields();
            }
        }

        function isRequestOk() {
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function fillCEPFields() {
            let data = parseData()
            if (!data) {
                getMessage('error');
                data = clearData();
            }

            logradouro.get()[0].textContent = data.logradouro;
            bairro.get()[0].textContent = data.bairro;
            estado.get()[0].textContent = data.uf;
            cidade.get()[0].textContent = data.localidade;
            cep.get()[0].textContent = data.cep;
        }

        function clearData() {
            return {
                logradouro: '-',
                bairro: '-',
                estado: '-',
                cidade: '-',
                cep: '-'
            }
        }

        function parseData() {
            let result;
            try {
                result = JSON.parse(ajax.responseText);
            }
            catch (e) {
                result = null;
            }
            return result
        }

        function getMessage(type) {
            let messages = {
                loading: 'Buscando informações para o CEP [CEP]...',
                ok: 'Endereço referente ao CEP [CEP]:',
                error: 'Não encontramos o endereço para o CEP [CEP].'
            }
            status.get()[0].textContent = replaceCEP(messages[type], clearCep());
        }

        function replaceCEP(message) {
            return message.replace('[CEP]', clearCep());
        }

        return{
            getMessage: getMessage,
            replaceCEP: replaceCEP
        }
    };

    window.app = app();
})(window.DOM);
