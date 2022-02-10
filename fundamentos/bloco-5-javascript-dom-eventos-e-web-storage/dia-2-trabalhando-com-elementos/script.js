let beBody = document.querySelector('body');

let firstTitle = document.createElement('h1');

firstTitle.className = 'title';

firstTitle.innerText = 'Exercício 5.2 - JavaScript DOM';

beBody.appendChild(firstTitle);

let beMain = document.createElement('main');

beMain.className = 'main-content';

beBody.appendChild(beMain);

let beFirstSection = document.createElement('section');

beFirstSection.className = 'center-content';

beMain.appendChild(beFirstSection);

let firstP = document.createElement('p');

firstP.innerText = 'Ayaya';

beFirstSection.appendChild(firstP);

let leftSection = document.createElement('section');

leftSection.className = 'left-content';

beMain.appendChild(leftSection);

let rightSection = document.createElement('section');

rightSection.className = 'right-content';

beMain.appendChild(rightSection);

let img = document.createElement('img');

img.className = 'small-image';

img.src = 'https://picsum.photos/200';

leftSection.appendChild(img);

let uList = document.createElement('ul');

let numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let i in numbers) {
  let numerals = numbers[i];
  let listItems = document.createElement('li');
  listItems.innerText = numerals;
    uList.appendChild(listItems);
}

rightSection.appendChild(uList);

for (let i = 0; i <= 2; i += 1) {
  let tagH3 = document.createElement('h3');
  tagH3.className = 'description';
  beMain.appendChild(tagH3);
};

beMain.removeChild(leftSection);

rightSection.style.marginRight = 'auto';

beFirstSection.parentElement.style.backgroundColor = 'green';

uList.lastChild.remove();
uList.lastChild.remove();