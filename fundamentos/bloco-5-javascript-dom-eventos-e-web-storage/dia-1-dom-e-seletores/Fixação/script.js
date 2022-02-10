// rgb(20, 173, 20)

let bodyId = document.getElementById('container');
bodyId.style.backgroundColor = '(255, 255, 255, 0.842)';

let headerId = document.getElementById('header-container');
headerId.style.backgroundColor = 'rgb(35, 211, 94)';

let firstSection = document.querySelector('.emergency-tasks');
firstSection.style.backgroundColor = 'salmon';

let hFirstSection = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < hFirstSection.length; i += 1) {
  hFirstSection[i].style.backgroundColor = 'purple';
};

let secondSection = document.querySelector('.no-emergency-tasks');
secondSection.style.backgroundColor = 'rgb(223, 223, 98)';

let hSecondSection = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < hSecondSection.length; i += 1) {
  hSecondSection[i].style.backgroundColor = 'black';
};

let footerBox = document.querySelector('#footer-container');
footerBox.style.backgroundColor = 'rgb(18, 68, 27)';