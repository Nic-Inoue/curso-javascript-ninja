(function(){
  /*
  Envolva todo o código desse desafio em uma IIFE.
  Crie um arquivo chamado index.html e adicione esse script ao HTML.
  */

  /*
  Crie uma função construtora chamada "Person". Esse construtor deve ter
  as seguintes características:
  - Deve receber 3 parâmetros: `name`, `lastName` e `age`;
  - Deverá ter 3 propriedades:
    - `name` - que receberá o valor do parâmetro `name`;
    - `lastName` - que receberá o valor do parâmetro `lastName`;
    - `age` - que receberá o valor do parâmetro `age`;
  - Deverá ter 3 métodos:
    - `getFullName` - que deve retornar o nome completo do objeto criado,
    no formato:
      - "[NAME] [LASTNAME]"
    - `getAge` - que deverá retornar a idade (age);
    - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
    iremos passar um único argumento, que é a quantidade de anos que devem ser
    adicionados à idade original (age). Esse método deverá retornar o objeto
    que será instanciado.
  */
  function Person(name, lastName, age){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function getFullName(){
      return name + ' ' + lastName;
    };
    this.getAge = function getAge(){
      return this.age;
    };
    this.addAge = function addAge(){
      this.age += arguments[0];
      return this;
    };
  };

  /*
  Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
  pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
  parâmetros corretamente para o construtor para criar as novas pessoas.
  Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
  */
  console.log( 'Novas pessoas criadas à partir de Person:' );
  var nicolas = new Person('Nicolas', 'Inoue', 21);
  var erika = new Person('Erika', 'Inoue', 47);
  var roberto = new Person ('Roberto', 'Silva', 52);

  console.log(nicolas);
  console.log(erika);
  console.log(roberto);

  /*
  Mostre no console o nome completo de cada pessoa.
  */
  console.log( '\nNomes das pessoas:' );
  console.log(nicolas.getFullName()); 
  console.log(erika.getFullName());
  console.log(roberto.getFullName());

  /*
  Mostre no console as idades de cada pessoa, com a frase:
  - "[NOME COMPLETO] tem [IDADE] anos."
  */
  console.log( '\nIdade das pessoas:' );
  console.log(nicolas.getFullName() + ' tem ' + nicolas.getAge() + ' anos.');
  console.log(erika.getFullName() + ' tem ' + erika.getAge() + ' anos.');
  console.log(roberto.getFullName() + ' tem ' + roberto.getAge() + ' anos.');

  /*
  Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
  cada um. A frase deverá ser no formato:
  - "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
  */
  console.log( '\nNova idade das pessoas:' );
  console.log(nicolas.getFullName() + ' agora tem ' + nicolas.addAge(9).getAge() + ' anos.');
  console.log(erika.getFullName() + ' agora tem ' + erika.addAge(3).getAge() + ' anos.');
  console.log(roberto.getFullName() + ' agora tem ' + roberto.addAge(8).getAge() + ' anos.');
})();
