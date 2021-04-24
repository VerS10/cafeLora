import './style.css';

export const Layer = (props) => {
  return `
  <div class="Layer">
  <div
    class="Layer__color"
    style="background-color: ${props.color}"
  ></div>
  <div class="Layer__label">${props.label}</div>
  </div>
  `;
};
