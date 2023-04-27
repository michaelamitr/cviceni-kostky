import { Dice } from './Dice/dice.js';

export const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

const diceRowElm = document.querySelector('#dice-row');
diceRowElm.append(Dice({ side: roll() }));
diceRowElm.append(Dice({ side: roll() }));
diceRowElm.append(Dice({ side: roll() }));
diceRowElm.append(Dice({ side: roll() }));
