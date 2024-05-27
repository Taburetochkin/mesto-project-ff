import './pages/index.css';
import { initialCards } from './scripts/cards.js'
import { getCard, removeCard, likeCard } from './scripts/card.js'
import { handleClick, openModal, closeModal } from './scripts/modal.js'

const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileForm = document.forms['edit-profile'];
const profileNameInput = profileForm.elements.name;
const profileJobInput = profileForm.elements.description;
const profileNameContent = document.querySelector('.profile__title');
const profileJobContent = document.querySelector('.profile__description');

const cardAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const cardForm = document.forms['new-place'];
const cardNameInput = document.querySelector(".popup__input_type_card-name"); 
const cardLinkInput = document.querySelector(".popup__input_type_url");

const imageItem = document.querySelector('.popup__image');
const imagePopup = document.querySelector('.popup_type_image');
const imageCaption = document.querySelector('.popup__caption');

const handleFormSubmit = (event) => {
  event.preventDefault()
  profileNameContent.textContent = profileNameInput.value;
  profileJobContent.textContent = profileJobInput.value;
  closeModal(profilePopup);
}

profileEditButton.addEventListener('click', () => {
  profileNameInput.value = profileNameContent.textContent;
  profileJobInput.value = profileJobContent.textContent;
  openModal(profilePopup);
})

profilePopup.addEventListener('click', handleClick);
profileForm.addEventListener('submit', handleFormSubmit);

const addCard = (element) => {
  placesList.append(getCard(element, removeCard, likeCard, openImage));
}

initialCards.forEach((element) => addCard(element));

cardAddButton.addEventListener('click', ()=> {
  openModal(cardPopup);
});
cardPopup.addEventListener('click', handleClick);

const createCard = (event) => {
  event.preventDefault();
  const cardInfo = {
    name: cardNameInput.value,
    link: cardLinkInput.value
  } 
  placesList.prepend(getCard(cardInfo, removeCard, likeCard, openImage));
  cardForm.reset();
  closeModal(cardPopup);
}

cardForm.addEventListener('submit', createCard);

const openImage = (event) => {
  imageItem.src = event.target.src;
  imageItem.alt = event.target.alt;
  imageCaption.textContent = event.target.alt;
  openModal(imagePopup);
}

imagePopup.addEventListener('click', handleClick);