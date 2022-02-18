function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function numberDays() {
  let ulDays = document.querySelector('#days');

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      ulDays.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      ulDays.appendChild(dayItem);
    }
  };
};

numberDays();

function holidays(feriados) {
  let button = document.querySelector('.buttons-container');
  let holiButton = document.createElement('button');
  let buttonID = 'btn-holiday';

  holiButton.innerHTML = feriados;
  holiButton.id = buttonID;
  button.appendChild(holiButton);
}

holidays('Feriados');

function holidaysColor() {
  let imDying = document.querySelector('#btn-holiday');
  let notTooMuch = document.querySelectorAll('.holiday')
  let BGColor = 'rgb(238,238,238)';
  let newColor = 'white';
  
  imDying.addEventListener('click', function () {
    for (let i = 0; i < notTooMuch.length; i += 1) {
      if (notTooMuch[i].style.backgroundColor === newColor) {
        notTooMuch[i].style.backgroundColor = BGColor;
      } else {
        notTooMuch[i].style.backgroundColor = newColor;
      }
    }
  })
};

holidaysColor();

function fridayButton(button) {
  let fButton = document.querySelector('.buttons-container');
  let nButton = document.createElement('button');
  let nButtonID = 'btn-friday';

  nButton.innerHTML = button;
  nButton.id = nButtonID;
  fButton.appendChild(nButton);
};

fridayButton('Sexta-feira');

function fridayColor(fridaysArray) {
  let colorFridayButton = document.querySelector('#btn-friday');
  let friday = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  colorFridayButton.addEventListener('click', function() {
    for (let i = 0; i < friday.length; i += 1) {
      if (friday[i].innerHTML !== newFridayText) {
          friday[i].innerHTML = newFridayText;
      } else {
          friday[i].innerHTML = fridaysArray[i];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
fridayColor(dezFridays);

function z00m() {
  let zoom = document.querySelector('#days');
  zoom.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '400';
  });
};

function ziim() {
  let ziim = document.querySelector('#days');
  ziim.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

z00m();
ziim();

function tasks(tarefa) {
  let task = document.querySelector('.my-tasks');
  let span = document.createElement('span');

  span.innerHTML = tarefa;
  task.appendChild(span);

};

tasks('Projeto:');

function taskSubtitle(cor) {
  let subtitle = document.querySelector('.my-tasks');
  let div = document.createElement('div');
 
  div.className = 'task';
  div.style.backgroundColor = cor;

  subtitle.appendChild(div);
};

taskSubtitle('green');

function taskYellow(cor) {
  let currentTask = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');

  createDiv.className = 'task';
  createDiv.style.backgroundColor = cor;

  currentTask.appendChild(createDiv);
};

taskYellow('yellow');

function divClick() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  console.log(myTasks);

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

divClick();

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();
