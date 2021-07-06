import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'XDD';

  return element;
}

document.body.appendChild(component());
