import './style.css';
import { Layer} from './../Layer/index'

export const Drink = (props) => {
  let layersHtml = '';

//props.layers.forEach((layer) => (drinkInfoElm.innerHTML += Layer(layer)))
for (let i = 0; i < layers.length; i++) {
  layersHtml += Layer(layers[i]);
}

const element = document.createElement('div')¨;
element.classList.add('drink')
element.innerHTML = `
<div class="drink">
            <div class="drink__product">
              <div class="drink__cup">
                <img src="/assets/cups/${props.id}.png" />
              </div>
              <div class="drink__info">
                <h3>${props.name}</h3>
                ${layersHtml}
              </div>
            </div>
            <div class="drink__controls">
              <button class="order-btn">Objednat</button>
            </div>
            `
const btn = element.querySelector('order-btn');
btn.addEventListener('click', () => {
  props.ordered = !props.ordered;
  if (props.ordered) {btn.textContent = 'Zrušit';
drinkCup.classList.add('drink__cup--selected');}
else {btn.textContent = 'Objednat';
drinkCup.classList.remove('drink__cup--selected');
}
});

return element;