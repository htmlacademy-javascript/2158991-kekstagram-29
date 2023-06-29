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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min,max) => {
  let previousValues = [];

  if (previousValues.length >= (max-min+1)){
    console.err('В диапазоне не осталось свободных значений');
    return null;
  }

  let currentValue = getRandomInteger(min,max);
  while (previousValues.includes(currentValue)){
    currentValue = getRandomInteger(min,max);
  }
  previousValues.push(currentValue);
  return currentValue;
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createPhoto = () => {
  return {
    id: createRandomIdFromRangeGenerator(1,PHOTO_COUNT),
    url: 'photos/'+createRandomIdFromRangeGenerator(1,PHOTO_COUNT)+'.jpg',
    description: DESCRIPTION[getRandomInteger(0,DESCRIPTION.length-1)],
    likes: getRandomInteger(15,200),
    comments: Array.from({length: getRandomInteger(0,30)},createComments),
  }
};

const createComments = () => {
  return {
    id: createRandomIdFromRangeGenerator(1,777),
    avatar: 'img/avatar-'+getRandomInteger(1,6),
    message: getRandomArrayElement(MASSAGE),
    name: NAMES[getRandomInteger(0,NAMES.length-1)],
  }
};

const PHOTOS = Array.from({length: PHOTO_COUNT},createPhoto);

console.log(PHOTOS);
