const checkStringLength = (string, maxLength) => string.length <= maxLength;

function isPalindrome (string) {
  string = string.replaceAll(' ','').toLowerCase();
  const reverseString = string.split('').reverse().join('');
  return string === reverseString;
}

function getNumber (string) {
  let num = '';
  string = string.toString();
  for (let i = 0; i < string.length; i++){
    if (!Number.isNaN(parseInt(string[i]))){
      num += string[i];
    }
  }
  if (num.length === 0) {
    return NaN;
  }
  return parseInt(num);
}

export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const createRandomIdFromRangeGenerator = (min,max) => {
  const previousValues = [];

  return function () {
    if (previousValues.length >= (max-min+1)) {
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
};

export const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

