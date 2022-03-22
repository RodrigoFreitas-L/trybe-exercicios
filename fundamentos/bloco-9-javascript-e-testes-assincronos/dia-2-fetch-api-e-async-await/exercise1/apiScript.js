// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';
const jokeContainer = document.querySelector('#jokeContainer');
const jokeGenerator = document.querySelector('#jokegen');


window.onload = () => {
  jokeGenerator.addEventListener('click', async () => {
    const newObj = {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    };
    
    await fetch(API_URL, newObj)
    .then(response => response.json())
    .then(data => jokeContainer.innerText = data.joke);
  });
};