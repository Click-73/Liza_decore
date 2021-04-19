let listElem = document.querySelector('.widget');
let menuButtonElem = document.querySelector('.header__menu-icon');

const openCloseMenu = () => {
  if (listElem.style.display == 'block') {
    listElem.style.display = 'none';
    return;
  }
  if (listElem.style.display == 'none') {
    listElem.style.display = 'block';
    return;
  }
};
const alertCle = () => {
  if (listElem.style.display == 'none') {
    listElem.style.display = 'block';
    return;
  }
};

menuButtonElem.addEventListener('click', openCloseMenu);
