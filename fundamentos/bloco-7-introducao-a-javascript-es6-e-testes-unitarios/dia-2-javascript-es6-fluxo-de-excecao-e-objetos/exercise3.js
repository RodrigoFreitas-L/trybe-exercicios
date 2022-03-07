const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const nightShift = (object, keyName, keyValue) => {
  object[keyName] = keyValue;
};

nightShift(lesson2, 'turno', 'noite');

// console.log(lesson2);

// console.log(nightShift(lesson2, 'turno', 'noite')); // that works :)

const listKeys = (object) => Object.keys(object);

// console.log(listKeys(lesson1));

const listLength = (object) => Object.keys(object).length;

// console.log(listLength(lesson3));

const listValues = (object) => Object.values(object);

// console.log(listValues(lesson1));

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
};

// console.log(numberOfStudents(allLessons));

const keyValuesLesson = (lesson, indexInLesson) => Object.values(lesson)[indexInLesson];

// console.log(keyValuesLesson(lesson1, 0));

const verifyContains = (obj, key, value) => {
  const array = Object.entries(obj);
  let verify = false;
  for (let i in array) {
    if (array[i][0] === key && array[i][1] === value) verify = true;
  }
  return verify;
}

console.log(verifyContains(lesson1, 'turno', 'manhã'));
