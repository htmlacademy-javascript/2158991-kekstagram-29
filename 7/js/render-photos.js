import {getCloneTemplate} from './utils.js';

const createPhoto = ({url, description, likes, comments}) => {
  const photoElement = getCloneTemplate('#picture', '.picture');
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__img').alt = description;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comments.length;

  return photoElement;
};

export const renderPhoto = (PHOTOS, classContainer) => {
  const photos = document.createDocumentFragment();
  PHOTOS.forEach((element) => {
    photos.appendChild(createPhoto(element));
  });
  const container = document.querySelector(classContainer);
  container.appendChild(photos);
};
