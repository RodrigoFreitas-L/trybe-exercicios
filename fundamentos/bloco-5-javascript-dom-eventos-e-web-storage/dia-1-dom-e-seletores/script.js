        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
function switchP() {
  let changeText = document.getElementsByTagName('p');
  changeText[1].innerText = 'Ayaya';

}
switchP();

function switchBGC() {
  let changeBGC = document.getElementsByTagName('main')[0];
  changeBGC.style.backgroundColor = 'rgb(76,164,109)';
}
switchBGC();

function switchSectionBGColor() {
  let changeSectionBGColor = document.getElementsByClassName('center-content');
  for (let i = 0; i < changeSectionBGColor.length; i += 1) {
    changeSectionBGColor[i].style.backgroundColor = 'white';
  }
}
switchSectionBGColor();

function correctTitle() {
  let headerTitle = document.getElementsByClassName('title')[0];
  headerTitle.innerText = 'Exercícios 5.1 - JavaScript';

}
correctTitle();

function pUpperCase() {
  let upperCase = document.getElementsByTagName('p');
  for (let i in upperCase) {
    upperCase[i].innerText = upperCase[i].innerText.toUpperCase();
  }
}
pUpperCase();

function consoleP () {
  let output = document.getElementsByTagName('p');
  for (let i = 0; i < output.length; i += 1) {
    console.log(output[i].innerHTML);
  }

}
consoleP();