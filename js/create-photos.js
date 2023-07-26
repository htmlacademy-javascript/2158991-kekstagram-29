import {
  createRandomIdFromRangeGenerator,
  getRandomInteger,
  getRandomArrayElement
} from './utils.js';

import {
  NAMES,
  MASSAGE,
  DESCRIPTION
} from './data.js';

const PHOTO_COUNT = 25;

const generatePhotoId = createRandomIdFromRangeGenerator(1, PHOTO_COUNT);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, PHOTO_COUNT);
const generateCommentsId = createRandomIdFromRangeGenerator(0, 777);

const createPhoto = () => {
  return {
    id: generatePhotoId(),
    url: 'photos/'+generatePhotoUrl()+'.jpg',
    description: DESCRIPTION[getRandomInteger(0,DESCRIPTION.length-1)],
    likes: getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(0,30)},createComments),
  }
};

const createComments = () => {
  return {
    id: generateCommentsId(),
    avatar: 'img/avatar-'+getRandomInteger(1,6),
    message: getRandomArrayElement(MASSAGE),
    name: NAMES[getRandomInteger(0,NAMES.length-1)],
  }
};

export const photos = Array.from({length: PHOTO_COUNT},createPhoto);
