const numeroAleatorio = () => (Math.random() * 100);

const toUpperCase = (str) => str.toUpperCase();

const firstLetter = (str) => str.charAt(0);

const concatStrings = (str1, str2) => str1.concat(str2);

const API_REQUEST = async () => {
  const request = await fetch('https://dog.ceo/api/breeds/image/random');
  const response = await request.json();
  response.ok ? Promise.resolve(request) : Promise.reject(request);
}

module.exports = { 
  numeroAleatorio,
  toUpperCase,
  firstLetter,
  concatStrings,
  API_REQUEST,
};