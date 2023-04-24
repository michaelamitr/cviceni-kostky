import { Dice } from './Dice/dice.js';

console.log('funguju!');

const diceRowElm = document.querySelector('#dice-row');
diceRowElm.append(Dice({}));
diceRowElm.append(Dice({}));
diceRowElm.append(Dice({}));
diceRowElm.append(Dice({}));
