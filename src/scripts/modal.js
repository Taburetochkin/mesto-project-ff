const handleEscape = (event) => {
  if (event.key === 'Escape'){
    closeModal(document.querySelector('.popup_is-opened'));
  }
}

const handleClick = (event) => {
  if (event.target.closest('.popup__close')) {
    return closeModal(event.target.closest('.popup'));
  }
  
  if (event.target.classList.contains('popup_is-opened')) {
    return closeModal(event.target);
  }
};

const openModal = (element) => {
  element.classList.add('popup_is-opened');
  window.addEventListener('keydown', handleEscape);
}

const closeModal = (element) => {
  element.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', handleEscape);
}; 


export { handleClick, openModal, closeModal }