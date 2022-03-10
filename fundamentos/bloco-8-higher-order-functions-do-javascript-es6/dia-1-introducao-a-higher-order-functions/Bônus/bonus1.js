// const mage = {
//   healthPoints: 130,
//   intelligence: 45,
//   mana: 125,
//   damage: undefined,
// };

// const warrior = {
//   healthPoints: 200,
//   strength: 30,
//   weaponDmg: 2,
//   damage: undefined,
// };

// const dragon = {
//   healthPoints: 350,
//   strength: 50,
//   damage: undefined,
// };

// const battleMembers = { mage, warrior, dragon };

// const dragonAttack = (dragon) => {
//   const minDmg = 15;
  // const dragonDmg = Math.floor((Math.random() * (dragon.strength - minDmg + 1) + minDmg));
//   return dragonDmg;
// };

// const warriorAttack = (warrior) => {
//   const minDmg = warrior.strength;
//   const maxDmg = minDmg * warrior.weaponDmg;
//   const warriorDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
//   return warriorDamage;
// };

// const mageAttack = (mage) => {
//   const mageMana = mage.mana;
//   const minDmg = mage.intelligence;
//   const maxDmg = minDmg * 2;
//   const turnStats = {
//     manaSpent: 0,
//     damageDealt: 'Not enough mana...',
//   };

//   if (mageMana > 15) {
//     const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
//     turnStats.manaSpent = 15;
//     turnStats.damageDealt = mageDamage;
//     return turnStats;
//   }
//   return turnStats;
// };

// const gameActions = {
//   warriorTurn: (warriorAttack) => {
//     const warriorDamage = warriorAttack(warrior);
//     warrior.damage = warriorDamage;
//     dragon.healthPoints -= warriorDamage;
//   },
//   mageTurn: (mageAttack) => {
//     const mageTurnStats = mageAttack(mage);
//     const mageDamage = mageTurnStats.damageDealt;
//     mage.damage = mageDamage;
//     mage.mana -= mageTurnStats.manaSpent;
//     dragon.healthPoints -= mageDamage;
//   },
//   dragonTurn: (dragonAttack) => {
//     const dragonDamage = dragonAttack(dragon);
//     mage.healthPoints -= dragonDamage;
//     warrior.healthPoints -= dragonDamage;
//     dragon.damage = dragonDamage;
//   },
//   turnResults: () => battleMembers,
// };

// gameActions.warriorTurn(warriorAttack);
// gameActions.mageTurn(mageAttack);
// gameActions.dragonTurn(dragonAttack);
// console.log(gameActions.turnResults());

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * (dragon.strength - minDmg) + minDmg);
  if (dragon.healthPoints <= 0) {
    return 'Dragon is dead';
  }
  return maxDmg;
};

// console.log(dragonAttack(dragon));

const warriorAttack = (warrior) => {
  const minDmg = warrior.strength;
  const maxDmg = Math.floor(Math.random() * ((minDmg * warrior.weaponDmg) - minDmg) + minDmg);
  if (warrior.healthPoints <= 0) {
    return 'Warrior is dead';
  }
  return maxDmg;
};

// console.log(warriorAttack(warrior));

const mageAttack = (mage) => {
  const mageMp = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = Math.floor(Math.random() * ((mage.intelligence * 2) - minDmg) + minDmg);
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };
  if (mage.healthPoints <= 0) {
    return 'Mage is dead';
  }
  if (mageMp > 15) {
    turnStats.manaSpent = 15;
    turnStats.damageDealt = maxDmg;
    return turnStats;
  }

  return  turnStats;
};

// console.log(mageAttack(mage));

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    mage.damage = mageDamage;
    mage.mana -= mageTurnStats.manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());