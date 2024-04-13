// @todo: Темплейт карточки
const cardsTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
const addCard = (name, link, removeCard) => {
  const placesItem = cardsTemplate.cloneNode(true);
  const deleteButton = placesItem.querySelector('.card__delete-button');
  placesItem.querySelector('.card__image').src = link;
  placesItem.querySelector('.card__image').alt = name;
  placesItem.querySelector('.card__title').textContent = name;
  deleteButton.addEventListener('click', (event) => {
    removeCard(event);
  });
// по логике, в будущем при реализации добавления карточки, она должна добавляться 
// в начале страницы, а не в конце(reference - instagram, VK)
  return placesList.prepend(placesItem);
}
// @todo: Функция удаления карточки
const removeCard = (event) => {
  let placeToDelete = event.target.closest('.places__item');
  placeToDelete.remove();
}
// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
  addCard(item.name, item.link, removeCard);
})