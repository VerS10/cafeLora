import { Layer } from './Layer/index';
import './style.css';

console.log('funguju!');
/* úkol 3  - schovávání menu*/
const navigation = () => {
  const navigationClass = document.querySelector('nav');
  navigationClass.classList.toggle('nav-closed');
};

const btnElm = document.querySelector('#nav-btn');
btnElm.addEventListener('click', navigation);
/*zkrácený zápis - Standa -
const nav = document.querySelector('nav');
/*document.querySelector('#nav-btn').addEventListener('click', () => { nav.classList.toggle('nav-closed')})*/

document.querySelectorAll('nav a').forEach((element) => {
  element.addEventListener('click', navigation);
});
/* řešení Standy - všechna menu:
/*const navItems = nav.querySelectorAll('a')¨;
/*navItems.forEach((navItem) => {navItem.addEventListener('click', () => {nav.classList.add('nav-closed')})})*/

/*úkol 4 - objednávání nápojů:*/

const btn = document.querySelector('.order-btn');
let ordered = false;

btn.addEventListener('click', (event) => {
  const order = document.querySelector('.drink__cup');
  if (ordered === false) {
    order.classList.add('drink__cup--selected');
    btn.textContent = 'Zrušit';
    ordered = true;
  } else {
    order.classList.remove('drink__cup--selected');
    btn.textContent = 'Objednat';
    ordered = false;
  }
});
//Standovo jednodušší řešení:
//document.querySelector('.order-btn').addEventListener('click', () => {const drinkCup = document.querySelector('.drink__cup');
//const drinkBtn = document.querySelector('.order-btn');
//if (!drinkCup.classList.contains('drink__cup--selected')) {drinkCup.classList.add('drink__cup--selected');drinkBtn.textContent = 'Zrušit';} - vykřičník použitý jako neobsahuje - negace:)
//pokračování: else {drinkCup.classList.remove('drink__cup--selected');drinkBtn.textContent = 'Objednat';}})

//cvičení 5 - Ingredience
//const drinkInfoElm = document.querySelector('.drink__info');
//drinkInfoElm.innerHTML += Layer({
//  color: '#feeeca',
//  label: 'mléčná pěna',
//});
//drinkInfoElm.innerHTML += Layer({
//  color: '#fed7b0',
//  label: 'teplé mléko',
//});
//drinkInfoElm.innerHTML += Layer({
//  color: '#613916',
//  label: 'espreso',
//}); mít to zakomentované, aby fungovalo cvičení 6

//6
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espreso',
  },
];
//let layersHtml = '';

//layers.forEach((layer) => (drinkInfoElm.innerHTML += Layer(layer)))
//for (let i = 0; i < layers.length; i++) {
//  layersHtml += Layer(layers[i]);
//}
//document.querySelector('.drink__info').innerHTML += layersHtml; - zakomentováno - použito v komponentě DRINK

//7 - drinky
