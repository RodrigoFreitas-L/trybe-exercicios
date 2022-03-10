// const checker = (myBet, randomNumber) => myBet === randomNumber;

// const lottery = (myBet, callback) => {
//   const randomNumber = Math.floor((Math.random() * 5) + 1);

//   return callback(myBet, randomNumber) ? 'You won!' : 'Try again!';
// };

// console.log(lottery(3, checker));

const checker = (myBet, randomNumber) => myBet === randomNumber;

const randomNumber = (betNumber, betChecker) => {
  const numberGen = Math.floor((Math.random() * 5) +1);

  return betChecker(betNumber, numberGen) ? 'Você ganhou' : 'Tente novamente';
};

console.log(randomNumber(5, checker));