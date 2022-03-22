// const fetch = require('node-fetch');
const query = document.querySelector.bind(document);
const create = document.createElement.bind(document);

const fetchCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const crypto = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((err) => err.toString());

  return crypto;
}

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const endPoint = '/currencies/usd.min.json';
  const url = baseUrl.concat(endPoint);

  const usdCurrencies = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.usd)
  .catch((err) => err.toString());

  return usdCurrencies;
};



window.onload = () => {
  const createCryptoListBtn = query('#createcryptolist');

  createCryptoListBtn.addEventListener('click', setCrypto = async () => {
  const crypto = await fetchCrypto();
  const cryptoList = query('#cryptolist');

  crypto.filter((coin) => Number(coin.rank) <= 10)
  .forEach((coin) => {
    const newLi = create('li');
    newLi.innerText = `${coin.name} (${coin.symbol}: US$${Number(coin.priceUsd).toFixed(2)})`;

    cryptoList.appendChild(newLi);
  })
});

  const currenciesToBLR = query('#createcryptolisttoblr');

  currenciesToBLR.addEventListener('click', setCryptoToBLR = async () => {
    const crypto = await fetchCrypto();
    const usdCurrencies = await fetchUsdCurrencies();
    const cryptoList = query('#cryptolisttoblr');

    crypto.filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = create('li');
      const usdPrice = Number(coin.priceUsd);
      const blrPrice = usdPrice * usdCurrencies.brl
      newLi.innerText = `${coin.name} (${coin.symbol}: R$${blrPrice.toFixed(2)})`;

      cryptoList.appendChild(newLi);
    })
  })
};
