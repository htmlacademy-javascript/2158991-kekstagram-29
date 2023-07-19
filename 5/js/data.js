import {
  createRandomIdFromRangeGenerator,
  getRandomInteger,
  getRandomArrayElement
} from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const MASSAGE = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

const DESCRIPTION = [
  "Некоторые дни начинаются лучше остальных.",
  "Сегодня в моей душе солнце.",
  "Если ты ищешь того человека, который изменит твою жизнь, просто возьми и посмотри в зеркало.",
  "Красота лишь привлекает внимание, душа – завоевывает сердце.",
  "Все, что мы отдаем, возвращается вновь.",
  "Цени моменты.",
  "Улыбайся больше, смейся чаще.",
  "Счастье никогда не выйдет из моды.",
  "Они говорили мне, что я не смогу, поэтому я это сделала."
];

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

export const PHOTOS = Array.from({length: PHOTO_COUNT},createPhoto);
