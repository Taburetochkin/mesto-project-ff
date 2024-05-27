const cardsTemplate = document.querySelector('#card-template').content;

const getCard = (element, removeCard, likeCard, openImage) => {
  const cardItem = cardsTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardItem.querySelector('.card__image');
  const cardContent = cardItem.querySelector('.card__title');
  const cardLikeButton = cardItem.querySelector('.card__like-button');
  const cardDeleteButton = cardItem.querySelector('.card__delete-button');

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardContent.textContent = element.name;

  cardDeleteButton.addEventListener('click', () => {
    removeCard(cardItem);
  });

  cardLikeButton.addEventListener('click', likeCard);

  cardImage.addEventListener('click', openImage);

  return cardItem;
}

const removeCard = (element) => {
  element.remove();
}

const likeCard = (event) => {
  event.target.classList.toggle('card__like-button_is-active');
}

export { getCard, removeCard, likeCard };